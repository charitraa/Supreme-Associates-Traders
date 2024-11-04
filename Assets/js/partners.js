
// Define the gallery element
const gallery = document.getElementById("gallery");

// Array of image URLs
const images = ['image/partner/1.png', 'image/partner/Aakash Blowers.png', 'image/partner/Axis.jpg', 'image/partner/Global absorbant pvt ltd.png', 'image/partner/Initiative Water.png', 'image/partner/Mann+Hummel.png', 'image/partner/noble-chlor.jpg', 'image/partner/Pingxiang Tiansheng Chemical Equipment Co. Ltd..png', 'image/partner/Pure-N-safe.png', 'image/partner/Seko.png', 'image/partner/Watch-Water.png', 'image/partner/Watco Odissa.png']

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
