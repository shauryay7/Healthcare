package com.healthcare.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DoctorAvailabilityController {

    @GetMapping("/api/doctor-availability")
    public String checkDoctorAvailability(@RequestParam String specialization) {
        // Mocked list of doctors
        List<Doctor> doctors = getDoctorsBySpecialization(specialization);

        if (doctors.isEmpty()) {
            return "No doctors available for " + specialization + ".";
        } else {
            StringBuilder response = new StringBuilder("Available " + specialization + "s:\n");
            for (Doctor doctor : doctors) {
                response.append(doctor.getName()).append(" - ").append(doctor.getAvailability()).append("\n");
            }
            return response.toString();
        }
    }

    private List<Doctor> getDoctorsBySpecialization(String specialization) {
        List<Doctor> doctors = new ArrayList<>();
        doctors.add(new Doctor("Dr. Rajesh Kumar", "Cardiologist", "10 AM - 2 PM"));
        doctors.add(new Doctor("Dr. Sneha Sharma", "Dermatologist", "11 AM - 3 PM"));
        doctors.add(new Doctor("Dr. Anita Verma", "Gynecologist", "1 PM - 5 PM"));
        doctors.add(new Doctor("Dr. Rohan Singh", "Pediatrician", "9 AM - 1 PM"));
        doctors.add(new Doctor("Dr. Ravi Mehta", "Cardiologist", "3 PM - 7 PM"));
        doctors.add(new Doctor("Dr. Neha Gupta", "Dermatologist", "4 PM - 8 PM"));
        doctors.add(new Doctor("Dr. Priya Yadav", "Gynecologist", "10 AM - 12 PM"));
        doctors.add(new Doctor("Dr. Karan Ahuja", "Pediatrician", "2 PM - 6 PM"));

        List<Doctor> filteredDoctors = new ArrayList<>();
        for (Doctor doctor : doctors) {
            if (doctor.getSpecialization().equalsIgnoreCase(specialization)) {
                filteredDoctors.add(doctor);
            }
        }
        return filteredDoctors;
    }

    private static class Doctor {
        private String name;
        private String specialization;
        private String availability;

        public Doctor(String name, String specialization, String availability) {
            this.name = name;
            this.specialization = specialization;
            this.availability = availability;
        }

        public String getName() {
            return name;
        }

        public String getSpecialization() {
            return specialization;
        }

        public String getAvailability() {
            return availability;
        }
    }
}