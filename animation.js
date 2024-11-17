<script>
  // Select all the images inside the structure
  const images = document.querySelectorAll('.absolute.object-cover');

  // Apply animation
  anime({
    targets: images,
    scale: [1, 1.1], // Scale up the images
    rotate: function (el, i) {
      return i % 2 === 0 ? 10 : -10; // Alternate rotation direction
    },
    duration: 1500, // Animation duration
    easing: 'easeInOutSine', // Smooth easing
    loop: true, // Infinite loop
    direction: 'alternate', // Reverse direction each cycle
    delay: anime.stagger(200), // Stagger start times
  });
</script>