// JavaScript function to change background color to rainbow colors
function startColorChange() {
  var body = document.body;
  var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff']; // Rainbow colors
  var currentIndex = 0;

  // Change color every second
  var colorChangeInterval = setInterval(function() {
    body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }, 1000);
}

// JavaScript function to show an alert
function showAlert() {
  alert('Hello, this is an alert!');
}