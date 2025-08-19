const backgrounds = [
    'url("images/Jungle-Beach.jpg")',
    'url("images/camping.jpg")',
    'url("images/seastars.webp")',
    'url("images/tea.jpg")',
    'url("images/elephant.jpg")',
    'url("images/tulips.jpg")',
    'url("images/greece.avif")',
    'url("images/nine-arch.jpg")',
    'url("images/tajmahal.webp")',
    
];
let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    document.body.style.backgroundImage = backgrounds[currentIndex];

    // Move to the next image, loop back to the first if at the end
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Initial background image
changeBackground();

// Change background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);



// login btn
const loginBtn = document.getElementById("loginBtn");
const panel = document.getElementById("loginPanel");
const closeBtn = document.getElementsByClassName("close")[0];
const footer = document.getElementById("footer");

// Open the panel when login button is clicked
loginBtn.onclick = function() {
  panel.style.display = "flex";
  footer.style.display = "none";
};

// Close the panel when the 'x' is clicked
closeBtn.onclick = function() {
  panel.style.display = "none";
  footer.style.display = "flex";
};


// Footer 
// about us 
const aboutBtn = document.getElementById("about-btn");
const aboutPanel = document.getElementById("about-panel");
const closeAboutBtn = aboutPanel.getElementsByClassName("close-footer")[0];

// customer support
const supportBtn = document.getElementById("customer-btn");
const supportPanel = document.getElementById("support-panel");
const closeSupportBtn = supportPanel.getElementsByClassName("close-footer")[0];

// follow us 
const followUsBtn = document.getElementById("follow-btn");
const followPanel = document.getElementById("follow-panel");
const closeFollowBtn = followPanel.getElementsByClassName("close-footer")[0];

// open the about us panel 
aboutBtn.onclick = function() {
  console.log("About Us button clicked");
  aboutPanel.style.display = "flex";  
};

// close the about us panel 
closeAboutBtn.onclick = function() {
  console.log("Close About Us panel");
  aboutPanel.style.display = "none";  
};

// open the customer support panel 
supportBtn.onclick = function() {
  console.log("Customer Support button clicked");
  supportPanel.style.display = "flex";  
};

//close the customer support panel 
closeSupportBtn.onclick = function() {
  console.log("Close Customer Support panel");
  supportPanel.style.display = "none";  
};

//open the follow us panel 
followUsBtn.onclick = function() {
  console.log("Follow us button clicked");
  followPanel.style.display = "flex";
};

//close the follow us panel
closeFollowBtn.onclick = function() {
  console.log("Close Follow Us panel");
  followPanel.style.display = "none";
};

