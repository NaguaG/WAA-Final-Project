package com.raspa.propertymanagementbackend.services.impl;

import com.raspa.propertymanagementbackend.entities.DTOs.PropertyDTO;
import com.raspa.propertymanagementbackend.entities.Property;
import com.raspa.propertymanagementbackend.exceptions.BadRequestAlertException;
import com.raspa.propertymanagementbackend.repositories.LocationRepository;
import com.raspa.propertymanagementbackend.repositories.PropertyRepository;
import com.raspa.propertymanagementbackend.services.PropertyService;
import com.raspa.propertymanagementbackend.services.UserSecurityService;
import com.raspa.propertymanagementbackend.services.mappers.LocationMapper;
import com.raspa.propertymanagementbackend.services.mappers.PropertyMapper;
import com.raspa.propertymanagementbackend.services.specifications.PropertySpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class
PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;
    private final PropertyMapper propertyMapper;
    private final LocationMapper locationMapper;
    private final LocationRepository locationRepository;
    private final UserSecurityService userSecurityService;

    @Override
    public Page<PropertyDTO> findAll(Pageable pageable, MultiValueMap<String, String> queryParams) {
        Specification specification = Specification.where(null);
        if(queryParams.containsKey("price")) {
            specification = specification.and(PropertySpecification.propertyHasPrice(Double.parseDouble(queryParams.getFirst("price"))));
        }
        if(queryParams.containsKey("propertyType")){
            specification=specification.and(PropertySpecification.propertyHasPropertyType(queryParams.getFirst("propertyType")));
        }
        if(queryParams.containsKey("homeType")){
          specification=specification.and((PropertySpecification.propertyHasHomeType(queryParams.getFirst("homeType"))));
        }
        if(queryParams.containsKey("numberOfRooms")){
            specification=specification.and((PropertySpecification.propertyHasNumbersOfRooms(Integer.parseInt(queryParams.getFirst("numberOfRooms")))));
        }
        if(queryParams.containsKey("location")){
            specification=specification.and((PropertySpecification.propertyHasLocation(queryParams.getFirst("location"))));
        }
        Page<Property> properties = propertyRepository.findAll(specification, pageable);
        return properties.map(propertyMapper::convertToDto);

    }

    @Override
    public PropertyDTO findById(Long id) {
        return propertyMapper.convertToDto(propertyRepository.findById(id).orElseThrow(() ->
                new BadRequestAlertException("Invalid ID!")));
    }

    @Override
    public PropertyDTO save(PropertyDTO propertyDTO) {
        Property property = propertyMapper.convertToEntity(propertyDTO);
        property.setUser(userSecurityService.getUser());
        property.setLocation(locationRepository.findById(propertyDTO.getLocation().getId()).orElseThrow(() -> new BadRequestAlertException("Invalid Location ID!")));
        //TODO SET IMAGE URL
        return propertyMapper.convertToDto(propertyRepository.save(property));
    }

    @Override
    public PropertyDTO update(Long id, PropertyDTO payload) {
        Property property = propertyRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid ID!"));
        property.setHomeType(payload.getHomeType());
        property.setDescription(payload.getDescription());
        property.setPropertyType(payload.getPropertyType());
        property.setIsForRent(payload.getIsForRent());
        property.setIsForSell(payload.getIsForSell());

        property.setLocation(locationRepository.findById(payload.getLocation().getId()).orElseThrow(() -> new BadRequestAlertException("Invalid Location ID!")));
        property.setNumberOfRooms(payload.getNumberOfRooms());
        property.setPrice(payload.getPrice());

        // TODO SET IMAGES

        return propertyMapper.convertToDto(propertyRepository.save(property));
    }

    @Override
    public PropertyDTO delete(Long id) {
        Property property = propertyRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid ID!"));
        propertyRepository.delete(property);
        return propertyMapper.convertToDto(property);
    }
}