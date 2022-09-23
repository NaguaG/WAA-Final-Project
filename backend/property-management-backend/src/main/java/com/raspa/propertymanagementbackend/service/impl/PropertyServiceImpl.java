package com.raspa.propertymanagementbackend.service.impl;

import com.raspa.propertymanagementbackend.dto.PropertyDTO;
import com.raspa.propertymanagementbackend.entity.Property;
import com.raspa.propertymanagementbackend.repository.PropertyRepository;
import com.raspa.propertymanagementbackend.service.PropertyService;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;


    @Override
    public List<Property> findAll() {
        return propertyRepository.findAll();
    }

    @Override
    public Property findById(Long id) {
        return propertyRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Invalid ID!"));
    }

    @Override
    public Property save(Property propertyDTO) {
        return propertyRepository.save(propertyDTO);
    }

    @Override
    public Property update(Long id, Property property) {
        propertyRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid ID!"));
        return propertyRepository.save(property);
    }

    @Override
    public Property delete(Long id) {
        Property property = propertyRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid ID!"));
        propertyRepository.delete(property);
        return property;
    }
}

