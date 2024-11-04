const products = [
  {
    title: "IRON REMOVAL PLANT",
    description: "Our Iron Removal Plant efficiently removes excess iron from raw water\n              with minimal pressure loss,ensuring clean....",
    image: "image/product/1. Iron REmoval Plant.jpg",
    link: "./iron-removal-plant.html"
  },
  {
    title: "AMMONIA REMOVAL PLANT",
    description: "Our Ammonia Removal Plant efficiently removes ammonia from water using\n              advanced ion exchange technology....",
    image: "image/product/2. Ammonia Removal Plant.jpg",
    link: "./ammonia-removal-plant.html"
  },
  {
    title: "WASTEWATER TREATMENT PLANT",
    description: "A Wastewater Treatment Plant uses physical, chemical, and biological\n              processes to remove contaminants...",
    image: "image/product/3. WAstewater Treatment Plant.png",
    link: "./wastewater-treatment-plant.html"
  },
  {
    title: "EFFLUENT TREATMENT PLANT",
    description: "An Effluent Treatment Plant (ETP) is engineered to treat highly\n              contaminated wastewater from industries...",
    image: "image/product/4. effluent treatment plant.jpg",
    link: "./effluent-treatment-plant.html"
  },
  {
    title: "SEWAGE TREATMENT PLANT",
    description: "A Sewage Treatment Plant (STP) treats black and grey water to remove\n              contaminants, producing effluent...",
    image: "image/product/5. Sewage treatment plant.jpg",
    link: "./sewage-treatment-plant.html"
  },
  {
    title: "UV (Ultra-voilet)",
    description: "UV Technology effectively disinfects water by using ultraviolet light to\n              eliminate harmful microorganisms...",
    image: "image/product/8. Ultravoilet UV.jpg",
    link: "./ultravoilet-uv.html"
  },
  {
    title: "UF (Ultra -Filtration)",
    description: "UF Technology uses a semi-permeable membrane to remove physical, chemical, and biological impurities...",
    image: "image/product/6. Ultrafiltration UF.jpg",
    link: "./ultrafiltration-uf.html"
  },
  {
    title: "REVERSE OSMOSIS SYSTEM SYSTEM",
    description: "In view of Russia\u2019s military action against the Ukrainian people, being concerned about ensuring that European funds...",
    image: "image/product/7. REVERSE OSMOSIS SYSTEM System.jpg",
    link: "./reverse-osmosis-system.html"
  },
  {
    title: "CHLORINATION system",
    description: "Chlorination is a cost-effective method for disinfecting water. By adding chlorine, it effectively eliminates harmful...",
    image: "image/product/9. Chlorination System.jpeg",
    link: "./chlorination-system.html"
  },
  {
    title: "COMMUNITY WATER TREATMENT SYSTEM",
    description: "Water treatment methods differ by community, depending on the quality of the source water. Public water system...",
    image: "image/product/10. Community water supply.jpeg",
    link: "./community-water-treatment.html"
  },
  {
    title: "Water ATM",
    description: "We offer customizable Water ATMs in different sizes to meet your requirements. These machines accept....",
    image: "image/product/11. Water ATM.jpg",
    link: "./water-atm.html"
  },
  {
    title: "Smart Water Meter",
    description: "Supreme Associates Traders is a leading importer and supplier of Smart Water Meters. Our intelligent...",
    image: "image/product/12. Smart water meter 2.png",
    link: "./smart-water-meter.html"
  },
  {
    title: "DeIonized (DI) Plant",
    description: "A Deionization Plant is designed to remove dissolved mineral salts and impurities from water using ion exchange...",
    image: "image/product/13. Deionization Plant.jpg",
    link: "./deionization-plant.html"
  },
  {
    title: "HOT AND COLD SYSTEM",
    description: "Supreme Associates Traders supplies customized hot and cold water dispensing units in various sizes...",
    image: "image/product/14. Hot an Cold System.png",
    link: "./hot an-cold-system.html"
  },
  {
    title: "Liquid Chlorine Generator",
    description: "For large-scale water treatment plants, procuring bleaching powder each time may not be economically...",
    image: "image/product/15. Liquid Chlorine Generator.png",
    link: "./liquid-chlorine-generator.html"
  },
  {
    title: "Mobile Water Treatment Plant",
    description: "Supreme Associates Traders offers an innovative mobile water treatment plant for portable water treatment solutions...",
    image: "image/product/16. Mobile Water Treatment Plant.jpeg",
    link: "./mobile-water-treatment-plant.html"
  },
  {
    title: "Domestic Water Filters",
    description: "Supreme Associates Traders is a distributor of domestic water filters suitable for home applications, offering...",
    image: "image/product/17. Domestic Water Filters.png",
    link: "./domestic-water-filters.html./wa"
  },
  {
    title: "WATER treatment COMPONENT",
    description: "The spare parts used in our products are of the highest quality, sourced from trusted manufacturers, and...",
    image: "image/product/Cartridge Filters.jpeg",
    link: "./water-treatment-component.html"
  }
]

const cardContainer = document.getElementsByClassName('news-card')[0]; // Get the first element with the class 'news-card'

products.forEach((product, index) => {
  // Create a new div for the news item
  const newsItemDiv = document.createElement('div');
  newsItemDiv.className = 'news-item';

  const uvClass = (index === 5 || index === 6 || index === 8 || index === 9 || index === 14) ? ' UV' : ''; // Add a space if UV class is added

  // Set the inner HTML of the news item
  newsItemDiv.innerHTML = `
    <div class='news-image ${uvClass}'>
      <img src="${product.image}" alt="${product.title}" />
    </div>
    <div class='news-content'>
      <div class='news-content-heading'>${product.title}</div>
      <div class='news-content-paragraph'>${product.description}</div>
      <div class='news-contentbtn'>
        <a href="${product.link}" style="text-decoration: none; color: var(--blue);">Learn More</a>
        <i class='fa-solid fa-arrow-right'></i>
      </div>
    </div>
  `;

  // Append the news item to the card container
  cardContainer.appendChild(newsItemDiv);
});