package com.raspa.propertymanagementbackend.controllers;

import com.raspa.propertymanagementbackend.entities.DTOs.PropertyDTO;

import com.raspa.propertymanagementbackend.exceptions.BadRequestAlertException;
import com.raspa.propertymanagementbackend.services.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/properties")
public class PropertyController {

    private final PropertyService propertyService;

    @GetMapping
    public List<PropertyDTO> findAll() {
        return propertyService.findAll();
    }

    @GetMapping("/{id}")
    public PropertyDTO findById(@PathVariable Long id) {
        return propertyService.findById(id);
    }

    @PreAuthorize("hasRole('ROLE_OWNER')")
    @PostMapping
    public PropertyDTO save(@RequestBody PropertyDTO propertyDTO) {
        return propertyService.save(propertyDTO);
    }

    @PreAuthorize("hasRole('ROLE_OWNER')")
    @PutMapping("/{id}")
    public PropertyDTO update(@PathVariable Long id, @RequestBody PropertyDTO payload) {
        if(id != payload.getId()) throw new BadRequestAlertException("Invalid ID!");
        return propertyService.update(id, payload);
    }

    @PreAuthorize("hasRole('ROLE_OWNER')")
    @DeleteMapping("/{id}")
    public PropertyDTO delete(@PathVariable Long id) {
        return propertyService.delete(id);
    }


}
