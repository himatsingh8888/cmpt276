
// variable to store the ratings of each star click
const star_machines = document.querySelectorAll('.rating .starMachines')
const star_staff = document.querySelectorAll('.rating .starStaff')
const star_Location = document.querySelectorAll('.rating .starLocation')
const star_clean = document.querySelectorAll('.rating .starClean')
const star_atmosphere = document.querySelectorAll('.rating .starAsphere')

// When a user clicks on the star the star goes from unfilled to filled and this is the role of the 'active'
// So when you remove the active class the stars change from full star to an empty star

// Iterates through each item in this variable
// idx represents index of that element in array
star_machines.forEach((item, idx) => {

    // function runs when the star is clicked
    item.addEventListener('click', function () {
        // When a star is unclicked it removes the empty star and adds filled stars
        star_machines.forEach(i => {
            // Remove filled star class
            i.classList.remove('bxs-star'); 
            // Add empty star class
            i.classList.add('bx-star'); 
            // Remove active class    
            i.classList.remove('active');   
        });
        
        // When a star in the middle is clicked it will make sure that all stars before
        // are filled as well 
        // suppose you select 5 stars then want to do 2 then all the reaming stars will be deselected
        for (let i = 0; i <= idx; i++) {
            star_machines[i].classList.remove('bx-star');  // Remove empty star class
            star_machines[i].classList.add('bxs-star');    // Add filled star class
            star_machines[i].classList.add('active');      // Mark as active
        }

        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('machines_rating').value = idx + 1;
    });
});

////////////////////// ALL THESE CODES ARE THE SAME FOR THE OTHER ROWS ///////////////////////////////////////


star_staff.forEach((item, idx) => {
    item.addEventListener('click', function () {
        star_staff.forEach(i => {
            i.classList.remove('bxs-star'); 
            i.classList.add('bx-star');    
            i.classList.remove('active');   
        });
        
        for (let i = 0; i <= idx; i++) {
            star_staff[i].classList.remove('bx-star'); 
            star_staff[i].classList.add('bxs-star');    
            star_staff[i].classList.add('active');      
        }
        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('staff_rating').value = idx + 1;
    });
});

star_Location.forEach((item, idx) => {
    item.addEventListener('click', function () {
        star_Location.forEach(i => {
            i.classList.remove('bxs-star'); 
            i.classList.add('bx-star');     
            i.classList.remove('active');   
        });
        
        for (let i = 0; i <= idx; i++) {
            star_Location[i].classList.remove('bx-star');  
            star_Location[i].classList.add('bxs-star');   
            star_Location[i].classList.add('active');      
        }
        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('location_rating').value = idx + 1;
    });
});

star_clean.forEach((item, idx) => {
    item.addEventListener('click', function () {
        star_clean.forEach(i => {
            i.classList.remove('bxs-star');
            i.classList.add('bx-star');    
            i.classList.remove('active');   
        });
        
        for (let i = 0; i <= idx; i++) {
            star_clean[i].classList.remove('bx-star');
            star_clean[i].classList.add('bxs-star');   
            star_clean[i].classList.add('active');     
        }
        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('clean_rating').value = idx + 1;
    });
});


star_atmosphere.forEach((item, idx) => {
    item.addEventListener('click', function () {
        star_atmosphere.forEach(i => {
            i.classList.remove('bxs-star'); 
            i.classList.add('bx-star');    
            i.classList.remove('active');   
        });
        
        for (let i = 0; i <= idx; i++) {
            star_atmosphere[i].classList.remove('bx-star');  
            star_atmosphere[i].classList.add('bxs-star');    
            star_atmosphere[i].classList.add('active');    
        }
        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('atmosphere_rating').value = idx + 1;
    });
});


function generateStars(rating) {
    let stars = '';
    // Total number of stars
    let totalStars = 5; 

    // Add filled stars
    for (let i = 0; i < Math.floor(rating); i++) {
        stars += '<span style="color: gold; font-size: 2rem;">\u2605</span>'; // Filled star
    }

    // Check if there's a fractional part for a half star
    if (rating % 1 !== 0) {
        stars += '<i class="bx bxs-star-half" style="color: gold; font-size: 1.6rem;"></i>'; // Half star
    }

    // Add remaining empty stars
    for (let i = Math.ceil(rating); i < totalStars; i++) {
        stars += '<span style="color: lightgray; font-size: 2rem;">\u2606</span>'; // Empty star
    }

    return stars;
}


function initMap() {
    console.log("Google Maps initialized");
    const centerMap = { lat: 49.1722862, lng: -122.7331446 };
    const mapOptions = {
      center: centerMap,// Default center (example: Vancouver, BC)
      zoom: 10,
      disableDefaultUI: true
    };
    const map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
  
    // Get the gym name from the data attribute
    const gymName = document.getElementById("map-data").dataset.gymName;
    let locations = [];
  
    // Define all five locations for GoodLife Fitness
    if (gymName === "GoodLife Fitness") {
      locations = [
        { lat: 49.264408, lng: -123.131317, address: "1401 W 8th Ave, Vancouver, BC V6H 1C9" },
        { lat: 49.252100, lng: -122.893350, address: "3433 North Rd, Burnaby, BC V3J 0A9" },
        { lat: 49.140820, lng: -122.862550, address: "12992 76 Ave, Surrey, BC V3W 2V6" },
        { lat: 49.2303628, lng: -123.0040853, address: "4501 Kingsway, Burnaby, BC V5H 0E5" },
        { lat: 49.0503966, lng: -122.326023, address: "32500 South Fraser Way, Abbotsford, BC V2T 4W1" },
        { lat: 49.130900, lng: -122.319580, address: "32555 London Ave, Mission 1, BC V2V 6M7" }
      ];
    }

    else if (gymName === "Gold's Gym") {
        locations = [
          { lat: 49.151402, lng: -122.668953, address: "19989 81a Ave, Langley Twp, BC V2Y 0C7" },
          { lat: 49.263420, lng: -122.769539, address: "1950 Oxford Connector, Port Coquitlam, BC V3B 4H3" },
          { lat: 49.263330, lng: -123.120060, address: "709 W Broadway, Vancouver, BC V5Z 1J5" },
          { lat: 49.266690, lng: -123.242340, address: "2155 Allison Rd, Vancouver, BC V6T 1T5" },
        ];
    }

    else if (gymName === "Club 16") {
        locations = [
          { lat: 49.186330, lng: -122.849350, address: "10153 King George Blvd Unit 3400, Surrey, BC V3T 2W1" },
          { lat: 49.127979, lng: -122.845909, address: "6899 King George Blvd, Surrey, BC V3W 5A1" },
          { lat: 49.218670, lng: -122.956390, address: "7155 Kingsway Highgate Village Mall, Burnaby, BC V5E 2V1" },
          { lat: 49.267190, lng: -123.011940, address: "4199 Lougheed Hwy., Burnaby, BC V5Y 3C6" },
          { lat: 49.278100, lng: -122.814210, address: "2635 Barnet Hwy, Coquitlam, BC V3E 1K9" },
          { lat: 49.104600, lng: -122.823510, address: "26VC+WX Surrey, British Columbia" },
        ];
    }

    else if (gymName === "She's Fit") {
        locations = [
          { lat: 49.150000, lng: -122.891880, address: "8087 120 St #190, Delta, BC V4C 6P7" },
          { lat: 49.232340, lng: -123.009950, address: "4277 Kingsway M35, Burnaby, BC V5H 1Z6" },
          { lat: 49.164730, lng: -122.797230, address: "15355 Fraser Hwy Unit 104, Surrey, BC V3R 3P3" },
          { lat: 49.288410, lng: -123.116226, address: "1055 Canada Pl #50, Vancouver, BC V6C 0C3" },
          { lat: 49.107190, lng: -122.685280, address: "20175 Langley Bypass, Surrey, BC V3S 7X4" },
          { lat: 49.044700, lng: -122.777680, address: "16050 24 Ave #135, Surrey, BC V3Z 0R5" },
        ];
    }

    else if (gymName === "Anytime Fitness") {
        locations = [
          { lat: 49.248970, lng: -122.853600, address: "2662 Austin Ave, Coquitlam, BC V3K 6C4" },
          { lat: 49.176970, lng: -122.867090, address: "12830 96 Ave, Surrey, BC V3V 6A8" },
          { lat: 49.159650, lng: -122.779190, address: "8645 160 St #207, Surrey, BC V4N 1G4" },
          { lat: 49.059640, lng: -122.811620, address: "3189 King George Blvd, Surrey, BC V4P 1B8" },
          { lat: 49.218850, lng: -122.557870, address: "11939 240 St #210, Maple Ridge, BC V4R 1M7" },
          { lat: 49.103750, lng: -122.650310, address: "20631 Fraser Hwy, Langley, BC V3A 4G5" },
          { lat: 49.133260, lng: -122.337340, address: "32081 Lougheed Hwy. unit b1, Mission, BC V2V 1A3" },
        ];
    }

    else if (gymName === "Planet Fitness") {
        locations = [
          { lat: 49.323341, lng: -123.102707, address: "1025 Marine Dr, North Vancouver, BC V7P 1S6" },
          { lat: 49.212440, lng: -122.919230, address: "Westminster Centre, 555 6th St Ste 150, New Westminster, BC V3L 5H1" },
          { lat: 49.195950, lng: -122.844933, address: "10642 King George Blvd, Surrey, BC V3T 2X3" },
          { lat: 49.275610, lng: -122.795950, address: "3000 Lougheed Hwy., Coquitlam, BC V3B 1C5" },
          { lat: 49.130749, lng: -122.845932, address: "7093 King George Blvd Unit 401, Surrey, BC V3W 5A2" },
          { lat: 49.102772, lng: -122.657440, address: "5501 204 St Unit 110, Langley, BC V3A 5V3" },
          { lat: 49.044810, lng: -122.293860, address: "2369 McCallum Rd, Abbotsford, BC V2S 3N7" },
        ];
    }

    // Create an info window to display gym name and address
    const infoWindow = new google.maps.InfoWindow();
  
   // Place markers for each location and add click event
  locations.forEach(location => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: gymName // This shows the gym name on hover
    });

    // Set up click event to display the info window
    marker.addListener("click", () => {
      infoWindow.setContent(`
        <div>
          <strong>${gymName}</strong><br>
          ${location.address}
        </div>
      `);
      infoWindow.open(map, marker);
    });
  });
  

  }
  






// document.querySelector('.btn-submit').addEventListener('click', function(e) {
//     // Prevent form reload
//     //e.preventDefault();  

//     // Get the amount of stars that are selected from each star count
//     const machinesRating = document.querySelectorAll('.starMachines.active').length;
//     const staffRating = document.querySelectorAll('.starStaff.active').length;
//     const locationRating = document.querySelectorAll('.starLocation.active').length;
//     const cleanRating = document.querySelectorAll('.starClean.active').length;
//     const atmosphereRating = document.querySelectorAll('.starAsphere.active').length;
//     const averageRating = (machinesRating + staffRating + locationRating + cleanRating + atmosphereRating) / 5

//     // Get review text from the textbox
//     const reviewText = document.querySelector('textarea[name="opinion"]').value;

//     // Check if the form is filled out
//     if (machinesRating > 0 && staffRating > 0 && locationRating > 0 && cleanRating > 0 && atmosphereRating > 0 && reviewText.trim() !== '') {
//         // Create a new review element
//         const reviewElement = document.createElement('div');
//         reviewElement.classList.add('review-item');
//         // Function to create stars based on rating


     
//         // Build the review content dynamically with star ratings
//         reviewElement.innerHTML = `
//             <h4>Persons Review:</h4>
//             <p><strong>Average Rating:</strong> ${generateStars(averageRating)}</p>
//             <p><strong>Machines:</strong> ${generateStars(machinesRating)}</p>
//             <p><strong>Staff:</strong> ${generateStars(staffRating)}</p>
//             <p><strong>Location:</strong> ${generateStars(locationRating)}</p>
//             <p><strong>Cleanliness:</strong> ${generateStars(cleanRating)}</p>
//             <p><strong>Gym Atmosphere:</strong> ${generateStars(atmosphereRating)}</p>
//             <br>
//             <p><strong>Written Review:</strong> ${reviewText}</p>
//         `;

//         // Append the new review to the reviews list
//         document.getElementById('reviewsList').appendChild(reviewElement);

//         // Clear the form fields after submission
//         // Removes the active meaning they go back to unfilled stars
//         document.querySelector('textarea[name="opinion"]').value = ''; // Clear textarea
//         document.querySelectorAll('.starMachines.active').forEach(star => star.classList.remove('active'));
//         document.querySelectorAll('.starStaff.active').forEach(star => star.classList.remove('active'));
//         document.querySelectorAll('.starLocation.active').forEach(star => star.classList.remove('active'));
//         document.querySelectorAll('.starClean.active').forEach(star => star.classList.remove('active'));
//         document.querySelectorAll('.starAsphere.active').forEach(star => star.classList.remove('active'));
//         document.querySelectorAll('.bxs-star').forEach(star => star.classList.replace('bxs-star', 'bx-star'));
//     } 
//     else {
//         // Make sure all fiels are stired
//         alert('Please fill out all fields!');
//     }
// });
