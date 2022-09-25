package com.raspa.propertymanagementbackend.services;

import com.raspa.propertymanagementbackend.entities.DTOs.PropertyDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

@Service
public interface PropertyService {


    Page<PropertyDTO> findAll(Pageable pageable, MultiValueMap<String, String> queryParams);

    PropertyDTO findById(Long id);

    PropertyDTO save(PropertyDTO propertyDTO);

    PropertyDTO update(Long id, PropertyDTO property);

    PropertyDTO delete(Long id);
}
