package com.raspa.propertymanagementbackend.services.impl;

import com.raspa.propertymanagementbackend.entities.Application;
import com.raspa.propertymanagementbackend.entities.DTOs.ApplicationDTO;
import com.raspa.propertymanagementbackend.exceptions.BadRequestAlertException;
import com.raspa.propertymanagementbackend.repositories.ApplicationRepository;
import com.raspa.propertymanagementbackend.services.ApplicationService;
import com.raspa.propertymanagementbackend.services.mappers.ApplicationMapper;
import com.raspa.propertymanagementbackend.services.specifications.ApplicationSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {
private final ApplicationRepository applicationRepository;
private final ApplicationMapper applicationMapper;

    @Override
    public ApplicationDTO save(ApplicationDTO applicationDTO){
        Application application = applicationMapper.convertToEntity(applicationDTO);
        application.setIsForRent(application.getIsForSell());
        return applicationMapper.convertToDto(applicationRepository.save(application));
    }
    @Override
    public ApplicationDTO findById(Long id){
        return applicationMapper.convertToDto(applicationRepository.findById(id).orElseThrow(() ->
        new BadRequestAlertException("Invalid ID!")));
    }
    @Override
    public Page<ApplicationDTO> findAll(Pageable pageable, MultiValueMap<String, String> queryParams){
        Specification specification = Specification.where(null);
        if(queryParams.containsKey("propertyId")) {
            specification = specification.and(ApplicationSpecification.applicationHasPropertyId(Long.parseLong(queryParams.getFirst("propertyId"))));
        }
        if(queryParams.containsKey("submissionDate")){
            specification=specification.and(ApplicationSpecification.applicationHasSubmissionDate(LocalDate.parse(queryParams.getFirst("submissionDate"))));
        }
        if(queryParams.containsKey("locationId")){
            specification=specification.and((ApplicationSpecification.applicationHasLocationId(queryParams.getFirst("locationId"))));
        }

        Page<Application> applications = applicationRepository.findAll(specification, pageable);
        return applications.map(applicationMapper::convertToDto);
    }
    @Override
    public ApplicationDTO update(Long id, ApplicationDTO payload ){
    Application application = applicationRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid ID !"));
    application.setIsForSell(payload.getIsForSell());
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
