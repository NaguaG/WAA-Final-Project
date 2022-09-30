package com.raspa.propertymanagementbackend.controllers;

import com.raspa.propertymanagementbackend.entities.DTOs.FavListDTO;
import com.raspa.propertymanagementbackend.services.FavListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/fav-lists")
@RequiredArgsConstructor
public class FavListController {

    private final FavListService favListService;

    //get
    @GetMapping
    public List<FavListDTO> getAll(){
        return favListService.getAll();
    }

    //post
    @PostMapping()
    public FavListDTO create(@RequestBody FavListDTO favListDTO){
        return favListService.create(favListDTO);
    }


    //update
    @PutMapping
    public FavListDTO update(@PathVariable Long id, @RequestBody FavListDTO favListDTO){
        return favListService.update(id, favListDTO);
    }


    //delete
    @DeleteMapping
    public FavListDTO delete(@PathVariable Long id){
        return favListService.delete(id);
    }


}
