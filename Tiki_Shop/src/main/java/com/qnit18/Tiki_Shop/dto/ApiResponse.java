package com.qnit18.Tiki_Shop.dto;

public class ApiResponse {
    private int statusCode;
    private String url;

    // Constructors, getters, and setters
    public ApiResponse(int statusCode, String url) {
        this.statusCode = statusCode;
        this.url = url;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}

