package com.raspa.propertymanagementbackend.controllers;

import com.raspa.propertymanagementbackend.entities.Property;
import com.raspa.propertymanagementbackend.services.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/property")
public class PropertyController {

    private PropertyService propertyService;

    @GetMapping
    public List<Property> findAll() {
        return propertyService.findAll();
    }

    @GetMapping("/{id}")
    public Property findById(@PathVariable Long id) {
        return propertyService.findById(id);
    }

    @PostMapping
    public Property save(@RequestBody Property propertyDTO) {
        return propertyService.save(propertyDTO);
    }

    @PutMapping("/{id}")
    public Property update(@PathVariable Long id, @RequestBody Property property) {
        return propertyService.update(id, property);
    }

    @DeleteMapping("/{id}")
    public Property delete(@PathVariable Long id) {
        return propertyService.delete(id);
    }


}
