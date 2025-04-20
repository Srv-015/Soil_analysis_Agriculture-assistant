// Select elements safely
const loginBtn = document.querySelector("#login-btn");
const mainlogin = document.querySelector(".main-login");
const closebtn = document.querySelector("#closeLogin");
const login_container = document.querySelector(".login-container");
const analyse_btn = document.querySelector("#Analyze_btn");

console.log("hello samir")

// Open login popup
if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior

    if (mainlogin && login_container) {
      mainlogin.style.display = "flex"; // Show the popup
      mainlogin.style.zIndex = "10000";
      document.body.style.overflow = "hidden";

      mainlogin.style.animation = "animation 1s ease forwards";
      login_container.style.animation = "animation2 1.4s ease forwards";
    } else {
      console.error("Login elements not found!");
    }
  });
}

// Close login popup
if (closebtn) {
  closebtn.addEventListener("click", () => {
    document.body.style.overflow = "auto";

    if (mainlogin && login_container) {
      mainlogin.style.animation = "closeanimation 1.2s ease forwards";
      login_container.style.animation = "closeanimation2 1s ease forwards";

      // Hide after animation completes
      setTimeout(() => {
        mainlogin.style.display = "none";
      }, 1200);
    }
  });
}

// Redirect to analysis page
// if (analyse_btn) {
//   analyse_btn.addEventListener("click", () => {
//     window.location.href = "analysis.html";
//   });
// }

// Load Navbar Dynamically
// document.addEventListener("DOMContentLoaded", function () {
//   const navbarContainer = document.getElementById("navbar-container");
//   if (navbarContainer) {
//     fetch("navbar.html")
//       .then(response => response.text())
//       .then(data => {
//         navbarContainer.innerHTML = data;
//       })
//       .catch(error => console.error("Error loading navbar:", error));
//   }
// });



// Existing JavaScript Code (No changes to this part)
// Ensure this script runs after the page loads
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");

  if (loginBtn) {
      loginBtn.addEventListener("click", function () {
          alert("Login functionality coming soon!");
      });
  }
});

// Scroll Effect for Navbar Blur and Background Change
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".nnavbar");
  
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");  // Add blur and background when scrolling down
  } else {
      navbar.classList.remove("scrolled"); // Remove blur when scrolling up
  }
});

// Select the navbar
const navbar = document.querySelector(".nnavbar");

// Function to handle scroll effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
        // When scrolled down, apply blur effect
        navbar.style.background = "rgba(255, 255, 255, 0.1)"; 
        navbar.style.backdropFilter = "blur(10px)"; 
        navbar.style.transition = "background 0.3s ease-in-out";
    } else {
        // When at the top, make it fully transparent
        navbar.style.background = "transparent"; 
        navbar.style.backdropFilter = "none"; 
    }
});

