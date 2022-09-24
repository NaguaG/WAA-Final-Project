package com.raspa.propertymanagementbackend.services.impl;

import com.raspa.propertymanagementbackend.entities.DTOs.PropertyDTO;
import com.raspa.propertymanagementbackend.entities.Property;
import com.raspa.propertymanagementbackend.exceptions.BadRequestAlertException;
import com.raspa.propertymanagementbackend.repositories.PropertyRepository;
import com.raspa.propertymanagementbackend.services.PropertyService;
import com.raspa.propertymanagementbackend.services.UserSecurityService;
import com.raspa.propertymanagementbackend.services.mappers.PropertyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;
    private final PropertyMapper propertyMapper;
    private final UserSecurityService userSecurityService;

    @Override
    public List<PropertyDTO> findAll() {
        List<Property> properties = propertyRepository.findAll();
        return properties.stream().map(propertyMapper::convertToDto).collect(Collectors.toList());
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
        property.setLocation(payload.getLocation());
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