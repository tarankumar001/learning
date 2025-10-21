// Query the container and the search icon. Class names in the HTML are lowercase.
const container = document.querySelector('.container');
const searchIcon = document.querySelector('.search');

// Only add the listener if both elements exist to avoid runtime errors.

    searchIcon.addEventListener('click', () => {
        container.classList.toggle('active');
    });
