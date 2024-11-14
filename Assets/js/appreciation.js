
// Define the gallery element
const gallery = document.getElementById("gallery");

// Array of image URLs
const images = [
  "image\\appreciation\\Letter 1.pdf", "image\\appreciation\\letter 2.pdf", "image\\appreciation\\letter 3.pdf", "image\\appreciation\\letter 4.pdf", "image\\appreciation\\Letter 5.pdf"
]

// Add images dynamically to the gallery
images.forEach(image => {
  const img = document.createElement("embed");
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
