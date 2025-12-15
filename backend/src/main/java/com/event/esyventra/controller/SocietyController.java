package com.event.esyventra.controller;

import com.event.esyventra.dto.LoginRequest;
import com.event.esyventra.dto.LoginResponse;
import com.event.esyventra.model.Society;
import com.event.esyventra.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/society")
public class SocietyController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Society> createSociety(@RequestBody Society society) {
        Society createdSociety = userService.createSociety(society);
        return new ResponseEntity<>(createdSociety, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginSociety(@RequestBody LoginRequest loginRequest) {
        LoginResponse response = userService.loginSociety(loginRequest);
        
        if (response.getToken() != null) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }
}
