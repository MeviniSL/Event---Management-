package com.event.esyventra.service;

import com.event.esyventra.dto.LoginRequest;
import com.event.esyventra.dto.LoginResponse;
import com.event.esyventra.model.Society;
import com.event.esyventra.model.User;
import com.event.esyventra.repository.SocietyRepository;
import com.event.esyventra.repository.UserRepository;
import com.event.esyventra.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SocietyRepository societyRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

//Create User - POST/user
public User createUser(User user) {
    user.setRole("USER");
    // Hash the password before saving
    String hashedPassword = passwordEncoder.encode(user.getPassword());
    user.setPassword(hashedPassword);
    return userRepository.save(user);
}

//Create admin user
public User createAdminUser(User user) {
    user.setRole("ADMIN");
    String hashedPassword = passwordEncoder.encode(user.getPassword());
    user.setPassword(hashedPassword);
    return userRepository.save(user);
}

//User Login - POST/login
public LoginResponse loginUser(LoginRequest loginRequest) {
    Optional<User> userOptional = userRepository.findByIndexNumber(loginRequest.getIndex());
    
    if (userOptional.isPresent()) {
        User user = userOptional.get();
        
        if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            String token = jwtUtil.generateToken(user.getIndexNumber(), user.getName());
            return new LoginResponse(token, user.getIndexNumber(), user.getName(), user.getEmail(), "Login successful", user.getRole());
        } else {
            return new LoginResponse(null, null, null, null, "Invalid password", null);
        }
    } else {
        return new LoginResponse(null, null, null, null, "User not found", null);
    }
}

//Create Society - POST/society
    public Society createSociety(Society society){
        society.setRole("SOCIETY");
        String hashedPassword = passwordEncoder.encode(society.getPassword());
        society.setPassword(hashedPassword);
        return societyRepository.save(society);
    }

//Society Login - POST/society/login
public LoginResponse loginSociety(LoginRequest loginRequest) {
    Optional<Society> societyOptional = societyRepository.findByUsername(loginRequest.getIndex());
    
    if (societyOptional.isPresent()) {
        Society society = societyOptional.get();
        
        if (passwordEncoder.matches(loginRequest.getPassword(), society.getPassword())) {
            String token = jwtUtil.generateToken(society.getUsername(), society.getName());
            return new LoginResponse(
                token, 
                society.getUsername(), 
                society.getName(), 
                null, 
                "Login successful", 
                society.getRole()  // Added role parameter
            );
        } else {
            return new LoginResponse(
                null, 
                null, 
                null, 
                null, 
                "Invalid password", 
                null
            );
        }
    } else {
        return new LoginResponse(
            null, 
            null, 
            null, 
            null, 
            "Society not found", 
            null
        );
    }
}
}
