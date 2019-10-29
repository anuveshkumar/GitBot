package com.kachua.starredrepos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*" , allowedHeaders = "*")
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @PostMapping("/addToFavorites")
    public RepoModel addToFavorites(@RequestBody RepoModel repo){
        favoriteRepository.save(repo);
        return repo;
    }

    @GetMapping("/getAllFavorites")
    public List<RepoModel> getAllFavorites(){
        return favoriteRepository.findAll();
    }
}
