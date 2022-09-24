package com.raspa.propertymanagementbackend.repository;

import com.raspa.propertymanagementbackend.entities.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {


}
