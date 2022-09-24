package com.raspa.propertymanagementbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Boolean isForSell;
    private Boolean isForRent;
    private Integer numberOfRooms;
    private Double price;
    private String propertyType;
    private String homeType;

    private String description;
    @ManyToOne
    private Location location;

    @OneToMany(mappedBy = "property")
    private List<Image> images;

    @ManyToOne
    private User user;
}
