document.getElementById('check-bed-btn').addEventListener('click', function() {
    const availableBeds = Math.floor(Math.random() * 10);
    openModal("Bed Availability", `Available Beds: ${availableBeds}`);
});

document.getElementById('check-doctor-btn').addEventListener('click', function() {
    const availableDoctors = Math.floor(Math.random() * 5);
    openModal("Doctor Availability", `Available Doctors: ${availableDoctors}`);
});

function openModal(title, message) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = message;
    document.getElementById('modal').style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = "none";
});

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const modal = document.getElementById("doctor-modal");
    const checkDoctorBtn = document.getElementById("check-doctor-btn");
    const closeModalBtn = document.getElementById("close-modal");
    const specializationSelect = document.getElementById("specialization-select");
    const checkSpecializationBtn = document.getElementById("check-doctor-specialization");
    const doctorAvailabilityResults = document.getElementById("doctor-availability-results");

    // Open modal when "Check Doctor Availability" button is clicked
    checkDoctorBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal when the user clicks on <span> (x)
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
        doctorAvailabilityResults.innerHTML = ''; // Clear previous results
    }

    // Close modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            doctorAvailabilityResults.innerHTML = ''; // Clear previous results
        }
    }

    // Check availability of doctors based on specialization
    checkSpecializationBtn.onclick = function() {
        const specialization = specializationSelect.value;
        doctorAvailabilityResults.innerHTML = ''; // Clear previous results

        if (specialization) {
            const doctors = getDoctorsBySpecialization(specialization);
            if (doctors.length > 0) {
                doctorAvailabilityResults.innerHTML = `<h3>Available ${specialization}s:</h3><ul>${doctors.map(doctor => `<li>${doctor.name} - ${doctor.availability}</li>`).join('')}</ul>`;
            } else {
                doctorAvailabilityResults.innerHTML = `<p>No doctors available for ${specialization}.</p>`;
            }
        } else {
            alert('Please select a specialization.');
        }
    }

    // Function to get doctors by specialization
    function getDoctorsBySpecialization(specialization) {
        const doctors = [
            { name: "Dr. Rajesh Kumar", specialization: "Cardiologist", availability: "10 AM - 2 PM" },
            { name: "Dr. Sneha Sharma", specialization: "Dermatologist", availability: "11 AM - 3 PM" },
            { name: "Dr. Anita Verma", specialization: "Gynecologist", availability: "1 PM - 5 PM" },
            { name: "Dr. Rohan Singh", specialization: "Pediatrician", availability: "9 AM - 1 PM" },
            { name: "Dr. Ravi Mehta", specialization: "Cardiologist", availability: "3 PM - 7 PM" },
            { name: "Dr. Neha Gupta", specialization: "Dermatologist", availability: "4 PM - 8 PM" },
            { name: "Dr. Priya Yadav", specialization: "Gynecologist", availability: "10 AM - 12 PM" },
            { name: "Dr. Karan Ahuja", specialization: "Pediatrician", availability: "2 PM - 6 PM" }
        ];

        return doctors.filter(doctor => doctor.specialization === specialization);
    }
});

document.getElementById('sign-btn').addEventListener('click', function() {
    window.location.href = 'goto.html'; // Replace 'signup.html' with the actual path to your signup page
});