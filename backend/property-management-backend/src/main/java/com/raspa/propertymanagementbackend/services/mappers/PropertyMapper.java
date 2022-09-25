package com.raspa.propertymanagementbackend.services.mappers;

import com.raspa.propertymanagementbackend.entities.DTOs.PropertyDTO;
import com.raspa.propertymanagementbackend.entities.Property;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface PropertyMapper {
    PropertyMapper INSTANCE= Mappers.getMapper(PropertyMapper.class);

    Property convertToEntity(PropertyDTO propertyDTO);

    PropertyDTO convertToDto(Property property);

}
