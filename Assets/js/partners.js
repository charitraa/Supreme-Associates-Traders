
// Define the gallery element
const gallery = document.getElementById("gallery");

// Array of image URLs
const images = ['image/partner/Mann+Hummel.png', 'image/partner/Seko.png', 'image/partner/7.png', 'image/partner/1.png', 'image/partner/Initiative Water.png', 'image/partner/noble-chlor.jpg', 'image/partner/Pingxiang Tiansheng Chemical Equipment Co. Ltd..png', 'image/partner/Pure-N-safe.png', 'image/partner/watch water.png', 'image/partner/Watco.png', 'image/partner/Akash.png',]

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
