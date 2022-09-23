package com.raspa.propertymanagementbackend.service;

import com.raspa.propertymanagementbackend.dto.PropertyDTO;
import com.raspa.propertymanagementbackend.entity.Property;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PropertyService {


    List<Property> findAll();

    Property findById(Long id);

    Property save(Property propertyDTO);

    Property update(Long id, Property property);

    Property delete(Long id);
}
