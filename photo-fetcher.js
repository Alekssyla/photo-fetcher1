document.addEventListener("DOMContentLoaded", function () {
    const baseURL = "https://picsum.photos/367/300";
    const topImagesContainer = document.getElementById("topImages");
    const bottomImagesContainer = document.getElementById("bottomImages");
    const fetchButton = document.getElementById("fetch-button");
    const fetchMoreButton = document.getElementById("fetch-more-button");
    const grayscaleSlider = document.querySelector(".switch input");
  
    function fetchNewPhotos(container, count) {
      // Clear existing images
      container.innerHTML = "";
  
      // Fetch and append new images
      for (let i = 0; i < count; i++) {
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
            container.appendChild(imageElement);
          })
          .catch(error => {
            console.error("Error fetching image:", error);
          });
      }
    }
  
    function applyGreyscale() {
      const images = document.querySelectorAll(".image-row img");
      images.forEach(img => {
        img.style.filter = grayscaleSlider.checked ? "grayscale(100%)" : "none";
      });
    }
  
    // Event listeners
    fetchButton.addEventListener("click", function () {
      fetchNewPhotos(topImagesContainer, 4);
      fetchNewPhotos(bottomImagesContainer, 0); // Clear bottom images
    });
  
    fetchMoreButton.addEventListener("click", function () {
      fetchNewPhotos(bottomImagesContainer, 4);
    });
  
    grayscaleSlider.addEventListener("change", applyGreyscale);
  
    // Initial fetch
    fetchNewPhotos(topImagesContainer, 4);
  });
  