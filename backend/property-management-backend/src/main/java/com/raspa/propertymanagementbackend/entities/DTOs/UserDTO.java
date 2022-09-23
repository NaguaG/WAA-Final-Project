package com.raspa.propertymanagementbackend.entities.DTOs;

import com.raspa.propertymanagementbackend.entities.Image;
import com.raspa.propertymanagementbackend.entities.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private String fullName;
    private String email;
    private Long phoneNumber;
    private String imageUrl;
    private boolean enabled;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PropertyDTO {
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
}
