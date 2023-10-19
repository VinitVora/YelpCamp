// SignUp && SignIn
function signIn() {
    const username = document.getElementById('text').value;
    localStorage.setItem('username', username);
}

// Logged In
function displayUsername() {
    const username = localStorage.getItem('username');
    const usernameElement = document.getElementById('username');
    if (username) {
        usernameElement.textContent = `Welcome, ${username}`;
    } else {
        usernameElement.textContent = 'Welcome';
    }
}
displayUsername();

function setupMobileNavbar() {
    // Select the necessary elements
    const menuIcon = document.getElementById('menu-icon');
    const mobileNavbar = document.querySelector('.mobile-navbar');
  
    // Function to toggle the navigation menu
    function toggleMenu() {
      mobileNavbar.classList.toggle('active');
    }
  
    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', toggleMenu);
  
    // Close the mobile navigation menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-navbar a');
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNavbar.classList.remove('active');
      });
    });
  }
  
  // Call the function to set up the mobile navbar
  setupMobileNavbar();