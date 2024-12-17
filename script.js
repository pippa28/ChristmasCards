// Number of snowflakes to generate
const numberOfSnowflakes = 100;

// Function to create snowflakes
function createSnowflakes() {
  const snowflakeContainer = document.getElementById('snowflakes');

  // Loop to create multiple snowflakes
  for (let i = 0; i < numberOfSnowflakes; i++) {
    // Create a snowflake element
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Set random starting position for the snowflake
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random fall speed
    snowflake.style.animationDelay = Math.random() * 10 + 's'; // Random delay for starting

    // Append the snowflake to the container
    snowflakeContainer.appendChild(snowflake);
  }
}

// Call the function to create snowflakes when the page loads
window.onload = createSnowflakes;
