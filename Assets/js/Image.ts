// Define the gallery element
const gallery = document.getElementById('gallery') as HTMLElement;

// Array of image URLs
const images = [
  'image/images/0304ebcb-e3e0-4a74-82ba-f717b6730f86.jpg',
  'image/images/0576553a-96c5-4f16-b86b-ad47ee5357dc.jpg',
  'image/images/10636336-1b16-4bf2-9583-51b6bdba87df-768x1024.jpg',
  'image/images/15c01411-2632-40c5-bcf1-f65ddde71d6b.jpg',
  'image/images/3b107901-bb3f-41df-96cd-63ecc14b5466.jpg',
  'image/images/43ea6522-946b-4540-9c2c-97ada2af380a.jpg',
  'image/images/5e653c8b-9234-458f-b780-63b73968c892.jpg',
  'image/images/681406c9-bbec-404c-b9ef-b1e85576ce1c.jpg',
  'image/images/78a2d185-e92d-4731-8ab2-1ff112439e83.jpg',
  'image/images/92b1ac46-44f0-4e42-96fd-374f7832be19.jpg',
  'image/images/a5d0fb3a-50fd-48d9-9e42-c05254d36aa2.jpg',
  'image/images/ad8f3651-e236-49d3-b931-139ba1636652.jpg',
  'image/images/c80be2fa-97e4-42bc-ac2b-12c3bf94317b.jpg',
  'image/images/chlorine-tank.jpg',
  'image/images/d478a113-24cf-45e8-950c-580c7af5176a.jpg',
  'image/images/ddd9fc86-f051-4a33-b9b3-6faf5a3510b6-1024x768.jpg',
  'image/images/f6b6cca8-1dd8-49e6-bffe-a6504f8a5eb7-1024x769.jpg',
  'image/images/image-12-1024x576.jpg',
  'image/images/image.jpg',
  'image/images/image_water.jpg',
  'image/images/image_water_treatment.jpg',
  'image/images/images-2.jpg',
  'image/images/img-.jpg',
  'image/images/IMG-3497b3256567413e32cd7c422b76e149-V-1024x768.jpg',
  'image/images/ion-exchange-filter-1-1024x771.jpg',
  'image/images/iron-removial-1024x605.jpg',
  'image/images/sat-testi.jpg',
  'image/images/SS-vessel-1024x768.jpg',
  'image/images/sumeru-hospital-1024x768.jpeg',
  'image/images/UNADJUSTEDNONRAW_thumb_20f.jpg',
  'image/images/Untitled-1-2.jpg',
  'image/images/videoframe_5499.png',
  'image/images/WhatsApp-Image-2023-05-23-at-11.50.06-576x1024.jpeg',
  'image/images/WhatsApp-Image-2023-05-23-at-17.40.39-768x1024.jpeg',
];

// Add images dynamically to the gallery
images.forEach((image) => {
  const img = document.createElement('img');
  img.src = image;
  gallery.appendChild(img);
});

// Initialize lightGallery plugin
lightGallery(gallery, {
  controls: true,
  counter: false,
  download: true,
  plugins: [],
});
