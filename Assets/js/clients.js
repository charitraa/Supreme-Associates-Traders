
// Define the gallery element
const gallery = document.getElementById("gallery");

// Array of image URLs
const images = [
  'image/client/Department of Water Supply and Sewerage Management.png', 'image/client/Department of Food Technology and Quality Control.png', 'image/client/Bir Hospital.png', 'image/client/2021-05-14-002254.816779mohp.png', 'image/client/Central Vetinary Labratory.png', 'image/client/WHO logo.png', 'image/client/Embassy of The Islamic Republic of Pakistan, Nepal.png', 'image/client/Euro School.png', 'image/client/Global college of management.png', 'image/client/Helvatas Nepal.png', 'image/client/Minerals.png', 'image/client/Himalayan Airlines.png', 'image/client/Nepal Veterinary Association.png', 'image/client/Khwopa Hospital.png', 'image/client/Kist Medical College and Teaching Hospital.png', 'image/client/Nepal Police Hospital.png', 'image/client/Nepal Police.png', 'image/client/kkn.png', 'image/client/Nepal_Police_logo.png', 'image/client/Norvic Hospital.png', 'image/client/Nova Genetica Pharma.png', 'image/client/Shahid Gangalal National Heart Centre.png', 'image/client/shree_bir_hospital.png', 'image/client/Sosec Nepal.png', 'image/client/Unicef Logo.png', 'image/client/1630626411466.png', 'image/client/NWSSTC.png', 'image/client/Nepal Army.png', 'image/client/Rose Village Housing Society.png', 'image/client/watco_india_pvt__ltd__logo.png', 'image/client/SNV Nepal.png', 'image/client/nepalese.png', 'image/client/Patan Academy of Health Science.png'
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
