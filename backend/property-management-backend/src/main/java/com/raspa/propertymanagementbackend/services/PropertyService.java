package com.raspa.propertymanagementbackend.services;

import com.raspa.propertymanagementbackend.entities.DTOs.PropertyDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PropertyService {


    List<PropertyDTO> findAll();

    PropertyDTO findById(Long id);

    PropertyDTO save(PropertyDTO propertyDTO);

    PropertyDTO update(Long id, PropertyDTO property);

    PropertyDTO delete(Long id);
}
