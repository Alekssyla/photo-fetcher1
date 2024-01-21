document.addEventListener("DOMContentLoaded", function () {
    const baseURL = "https://picsum.photos/367/300";
    const topImagesContainer = document.getElementById("topImages");
    const bottomImagesContainer = document.getElementById("bottomImages");
    const checkbox = document.querySelector('input[type="checkbox"]');
    const fetchButton = document.getElementById("fetch-button");

    // Event listener for checkbox change
    checkbox.addEventListener('change', function () {
        document.body.classList.toggle('greyscale-mode', this.checked);
    });

    // Event listener for "Fetch New Photos" button click
    fetchButton.addEventListener("click", function () {
        // Remove existing images
        topImagesContainer.innerHTML = "";
        bottomImagesContainer.innerHTML = "";

        // Fetch and append new images
        for (let i = 0; i < 4; i++) {
            fetch(baseURL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.url;
                })
                .then(imageUrl => {
                    const imageElement = document.createElement("img");
                    imageElement.src = imageUrl;

                    if (i < 2) {
                        topImagesContainer.appendChild(imageElement);
                    } else {
                        bottomImagesContainer.appendChild(imageElement);
                    }
                })
                .catch(error => {
                    console.error("Error fetching image:", error);
                });
        }
    });

    // Event listener for checkbox change
    checkbox.addEventListener('change', function () {
        document.body.classList.toggle('greyscale-mode', this.checked);
    });

    for (let i = 0; i < 4; i++) {
        fetch(baseURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.url;
            })
            .then(imageUrl => {
                const imageElement = document.createElement("img");
                imageElement.src = imageUrl;

                if (i < 2) {
                    topImagesContainer.appendChild(imageElement);
                } else {
                    bottomImagesContainer.appendChild(imageElement);
                }
            })
            .catch(error => {
                console.error("Error fetching image:", error);
            });
    }
});
