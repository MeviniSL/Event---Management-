package com.event.esyventra.controller;

import com.event.esyventra.dto.LoginRequest;
import com.event.esyventra.dto.LoginResponse;
import com.event.esyventra.model.User;
import com.event.esyventra.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    //Create User - POST/user
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User createUser = userService.createUser(user);
        return new ResponseEntity<>(createUser, HttpStatus.CREATED);
    }
    //Create Admin User - POST/user/admin
    @PostMapping("/admin")
    public ResponseEntity<User> createAdminUser(@RequestBody User user) {
        User createAdmin = userService.createAdminUser(user);
        return new ResponseEntity<>(createAdmin, HttpStatus.CREATED);
    }

    //User Login - POST/user/login
     @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@RequestBody LoginRequest loginRequest) {

        LoginResponse response = userService.loginUser(loginRequest);
        
        if (response.getToken() != null) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }




}
