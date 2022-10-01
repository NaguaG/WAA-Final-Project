package com.raspa.propertymanagementbackend.controllers;

import com.raspa.propertymanagementbackend.entities.DTOs.PropertyDTO;
import com.raspa.propertymanagementbackend.exceptions.BadRequestAlertException;
import com.raspa.propertymanagementbackend.services.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/properties")
public class PropertyController {

    private final PropertyService propertyService;


    @GetMapping
    public Page<PropertyDTO> findAll(Pageable pageable, @RequestParam MultiValueMap<String, String> queryParams) {
        return propertyService.findAll(pageable, queryParams);
    }
    @GetMapping("/{id}")
    public PropertyDTO findById(@PathVariable Long id) {
        return propertyService.findById(id);
    }

    @PreAuthorize("hasRole('ROLE_OWNER')")
    @PostMapping
    public PropertyDTO save(@RequestPart("payload") PropertyDTO propertyDTO, @RequestPart(value = "image") MultipartFile image) throws Exception {
        return propertyService.save(propertyDTO, image);
    }

    @PreAuthorize("hasRole('ROLE_OWNER')")
    @PutMapping("/{id}")
    public PropertyDTO update(@PathVariable Long id, @RequestPart("payload") PropertyDTO propertyDTO, @RequestPart(value = "image", required = false) MultipartFile image) throws Exception {
        if(id != propertyDTO.getId()) throw new BadRequestAlertException("Invalid ID!");
        return propertyService.update(id, propertyDTO, image);
    }

    @PreAuthorize("hasRole('ROLE_OWNER')")
    @DeleteMapping("/{id}")
    public PropertyDTO delete(@PathVariable Long id) {
        return propertyService.delete(id);
    }


}
