
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
        star_machines.forEach(i => {
            i.classList.remove('bxs-star'); // Remove filled star class
            i.classList.add('bx-star');     // Add empty star class
            i.classList.remove('active');   // Remove active class
        });
        
        // When a star in the middle is clicked it will make sure that all stars before
        // are filled as well 
        for (let i = 0; i <= idx; i++) {
            star_machines[i].classList.remove('bx-star');  // Remove empty star class
            star_machines[i].classList.add('bxs-star');    // Add filled star class
            star_machines[i].classList.add('active');      // Mark as active
        }

        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('machines_rating').value = idx + 1;
    });
});



star_staff.forEach((item, idx) => {
    item.addEventListener('click', function () {
        star_staff.forEach(i => {
            i.classList.remove('bxs-star'); // Remove filled star class
            i.classList.add('bx-star');     // Add empty star class
            i.classList.remove('active');   // Remove active class
        });
        
        for (let i = 0; i <= idx; i++) {
            star_staff[i].classList.remove('bx-star');  // Remove empty star class
            star_staff[i].classList.add('bxs-star');    // Add filled star class
            star_staff[i].classList.add('active');      // Mark as active
        }
        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('staff_rating').value = idx + 1;
    });
});

star_Location.forEach((item, idx) => {
    item.addEventListener('click', function () {
        star_Location.forEach(i => {
            i.classList.remove('bxs-star'); // Remove filled star class
            i.classList.add('bx-star');     // Add empty star class
            i.classList.remove('active');   // Remove active class
        });
        
        for (let i = 0; i <= idx; i++) {
            star_Location[i].classList.remove('bx-star');  // Remove empty star class
            star_Location[i].classList.add('bxs-star');    // Add filled star class
            star_Location[i].classList.add('active');      // Mark as active
        }
        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('location_rating').value = idx + 1;
    });
});

star_clean.forEach((item, idx) => {
    item.addEventListener('click', function () {
        star_clean.forEach(i => {
            i.classList.remove('bxs-star'); // Remove filled star class
            i.classList.add('bx-star');     // Add empty star class
            i.classList.remove('active');   // Remove active class
        });
        
        for (let i = 0; i <= idx; i++) {
            star_clean[i].classList.remove('bx-star');  // Remove empty star class
            star_clean[i].classList.add('bxs-star');    // Add filled star class
            star_clean[i].classList.add('active');      // Mark as active
        }
        // Update hidden field with the selected rating (idx + 1 because idx is zero-based)
        document.getElementById('clean_rating').value = idx + 1;
    });
});


star_atmosphere.forEach((item, idx) => {
    item.addEventListener('click', function () {
        star_atmosphere.forEach(i => {
            i.classList.remove('bxs-star'); // Remove filled star class
            i.classList.add('bx-star');     // Add empty star class
            i.classList.remove('active');   // Remove active class
        });
        
        for (let i = 0; i <= idx; i++) {
            star_atmosphere[i].classList.remove('bx-star');  // Remove empty star class
            star_atmosphere[i].classList.add('bxs-star');    // Add filled star class
            star_atmosphere[i].classList.add('active');      // Mark as active
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
