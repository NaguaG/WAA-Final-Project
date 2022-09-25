package com.raspa.propertymanagementbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Boolean isForRent;
    private Boolean isForSell;

    @ManyToOne
    private User user;

    @ManyToOne
    private Property property;

}
