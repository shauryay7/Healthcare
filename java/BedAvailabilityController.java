package com.healthcare.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BedAvailabilityController {

    @GetMapping("/api/bed-check")
    public String checkBedAvailability() {
        // Randomly generate the number of available beds (simulating the JavaScript logic)
        int availableBeds = (int) (Math.random() * 10);
        return "Available Beds: " + availableBeds;
    }
}