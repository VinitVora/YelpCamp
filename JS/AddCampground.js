// Add New Campground
function displayUsernameCampgrounds() {
    const username = localStorage.getItem('username');
    const usernameElement = document.getElementById('username');
    if (username) {
        usernameElement.textContent = `${username}`;
    } else {
        usernameElement.textContent = 'Welcome';
    }
}
displayUsernameCampgrounds();

function addCampground() {
    console.log('addCampground function called.');  // Check if this line is logged
    const campgroundName = document.getElementById('text').value;
    const campgroundPrice = document.getElementById('number').value;
    const campgroundDescription = document.getElementById('msg').value;
    
    // Get the image file
    const imageInput = document.getElementById('file');
    const imageFile = imageInput.files[0];  // Assuming the user selects a single file
    
    if (imageFile) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const campgroundImage = event.target.result;
            
            // Create a campground object
            const newCampground = {
                name: campgroundName,
                price: campgroundPrice,
                image: campgroundImage,
                description: campgroundDescription
            };
            
            let campgrounds = JSON.parse(localStorage.getItem('campgrounds')) || [];
            campgrounds.push(newCampground);
            localStorage.setItem('campgrounds', JSON.stringify(campgrounds));
            
            window.location.href = '../HTML/SearchPage(LoggedIn).html';
        };
        
        reader.readAsDataURL(imageFile);
    } else {
        alert('Please select an image.');
    }
}

document.getElementById('addCampgroundBtn').addEventListener('click', addCampground);
