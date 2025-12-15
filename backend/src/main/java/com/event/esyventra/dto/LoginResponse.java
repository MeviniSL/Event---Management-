package com.event.esyventra.dto;

public class LoginResponse {
    private String token;
    private String index;
    private String name;
    private String email;
    private String message;
    private String role;

    // Default constructor
    public LoginResponse() {
    }

    // Constructor with all fields including role
    public LoginResponse(String token, String index, String name, String email, String message, String role) {
        this.token = token;
        this.index = index;
        this.name = name;
        this.email = email;
        this.message = message;
        this.role = role;
    }

    // Getters and Setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
