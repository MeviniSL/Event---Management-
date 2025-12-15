package com.event.esyventra.dto;

public class LoginRequest {
    private String index;
    private String password;

    public LoginRequest() {}

    public LoginRequest(String index, String password) {
        this.index = index;
        this.password = password;
    }

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
