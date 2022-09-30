package com.raspa.propertymanagementbackend.services.impl;

import com.raspa.propertymanagementbackend.entities.DTOs.FavListDTO;
import com.raspa.propertymanagementbackend.entities.FavList;
import com.raspa.propertymanagementbackend.entities.User;
import com.raspa.propertymanagementbackend.exceptions.BadRequestAlertException;
import com.raspa.propertymanagementbackend.repositories.FavListRepository;
import com.raspa.propertymanagementbackend.services.FavListService;
import com.raspa.propertymanagementbackend.services.UserSecurityService;
import com.raspa.propertymanagementbackend.services.mappers.FavListMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
@RequiredArgsConstructor
public class FavListServiceImpl implements FavListService {

    private final FavListRepository favListRepository;
    private final FavListMapper favListMapper;
    private final UserSecurityService userSecurityService;
    @Override
    public List<FavListDTO> getAll() {
        List<FavList> favLists = favListRepository.findAll();
        return favLists.stream().map(favListMapper::convertToDto).collect(Collectors.toList());
    }

    @Override
    public FavListDTO create(FavListDTO favListDTO) {
        FavList favList = favListMapper.convertToEntity(favListDTO);
        FavList save = favListRepository.save(favList);
        User user = userSecurityService.getCurrentUser().orElseThrow(() -> new BadRequestAlertException("Not Logged IN!"));
        user.getFavLists().add(save);
        return favListMapper.convertToDto(save);
    }

    @Override
    public FavListDTO update(Long id, FavListDTO favListDTO) {
        if(!id.equals(favListDTO.getId())) throw new RuntimeException("ID not current");
        FavList favList = favListRepository.findById(id).orElseThrow(() -> new RuntimeException(" Data Not found"));
        favList.setName(favListDTO.getName());
        return favListMapper.convertToDto(favListRepository.save(favList));
    }

    @Override
    public FavListDTO delete(Long id) {
        FavList favList = favListRepository.findById(id).orElseThrow(() -> new RuntimeException(" Data Not found"));
        favListRepository.deleteById(id);
        return favListMapper.convertToDto(favList);
    }
}
