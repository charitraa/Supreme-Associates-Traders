
// Define the gallery element
const gallery = document.getElementById("gallery");

// Array of image URLs
const images = [
  "image\\appreciation\\Letter 1_page-0001.jpg", "image\\appreciation\\letter 2_page-0001.jpg", "image\\appreciation\\letter 3_page-0001.jpg", "image\\appreciation\\letter 4_page-0001.jpg", "image\\appreciation\\Letter 5_page-0001.jpg"
]

// Add images dynamically to the gallery
images.forEach(image => {
  const img = document.createElement("img");
  img.src = image;
  gallery.appendChild(img);
});

// Initialize lightGallery plugin
lightGallery(gallery, {
  controls: true,
  counter: false,
  download: true,
  plugins: []
});
