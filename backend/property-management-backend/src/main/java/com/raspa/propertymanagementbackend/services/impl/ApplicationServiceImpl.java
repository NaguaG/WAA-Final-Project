package com.raspa.propertymanagementbackend.services.impl;

import com.raspa.propertymanagementbackend.entities.Application;
import com.raspa.propertymanagementbackend.entities.DTOs.ApplicationDTO;
import com.raspa.propertymanagementbackend.exceptions.BadRequestAlertException;
import com.raspa.propertymanagementbackend.repositories.ApplicationRepository;
import com.raspa.propertymanagementbackend.services.ApplicationService;
import com.raspa.propertymanagementbackend.services.mappers.ApplicationMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {
private final ApplicationRepository applicationRepository;
private final ApplicationMapper applicationMapper;

    @Override
    public ApplicationDTO save(ApplicationDTO applicationDTO){
        Application application = applicationMapper.convertToEntity(applicationDTO);
        application.setIsForRent(application.getIsForBuy());
        return applicationMapper.convertToDto(applicationRepository.save(application));
    }
    @Override
    public ApplicationDTO findById(Long id){
        return applicationMapper.convertToDto(applicationRepository.findById(id).orElseThrow(() ->
        new BadRequestAlertException("Invalid ID!")));
    }
    @Override
    public List<ApplicationDTO> findAll(){
        List<Application> applications = applicationRepository.findAll();
        return applications.stream().map(applicationMapper::convertToDto).collect(Collectors.toList());
    }
    @Override
    public ApplicationDTO update(Long id, ApplicationDTO payload ){
    Application application = applicationRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid ID !"));
    application.setIsForBuy(payload.getIsForBuy());
    application.setIsForRent(payload.getIsForRent());
    return applicationMapper.convertToDto(applicationRepository.save(application));
    }
    @Override
    public ApplicationDTO delete(Long id){
        Application application = applicationRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid ID !"));
        applicationRepository.delete(application);
        return applicationMapper.convertToDto(application);
    }

}
