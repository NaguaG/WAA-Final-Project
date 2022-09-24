package com.raspa.propertymanagementbackend.dto;

import com.raspa.propertymanagementbackend.entity.Image;
import com.raspa.propertymanagementbackend.entity.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PropertyDTO {
    private Integer id;
    private Boolean isForSell;
    private Boolean isForRent;
    private Integer numberOfRooms;
    private Double price;
    private String propertyType;
    private String homeType;
    private String description;
    private Location location;
    private List<Image> images;
}
