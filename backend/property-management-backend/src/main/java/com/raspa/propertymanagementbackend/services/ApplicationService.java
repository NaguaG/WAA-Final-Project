package com.raspa.propertymanagementbackend.services;

import com.raspa.propertymanagementbackend.entities.DTOs.ApplicationDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface ApplicationService {
    ApplicationDTO save(ApplicationDTO applicationDTO);

    ApplicationDTO findById(Long id);

    List<ApplicationDTO> findAll();

    ApplicationDTO update(Long id, ApplicationDTO payload);

    ApplicationDTO delete(Long id);
}
