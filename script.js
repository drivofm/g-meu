const noButton = document.getElementById('no');

noButton.addEventListener('mouseover', () => {
    // Generate random positions for the "No" button
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    // Apply the new position
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});
