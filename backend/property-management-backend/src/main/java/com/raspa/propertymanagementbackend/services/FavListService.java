package com.raspa.propertymanagementbackend.services;

import com.raspa.propertymanagementbackend.entities.DTOs.FavListDTO;

import java.util.List;

public interface FavListService {

    List<FavListDTO> getAll();
    FavListDTO create(FavListDTO favListDTO);
    FavListDTO update(Long id, FavListDTO favListDTO);
    FavListDTO delete(Long id);
}
