const images = [
  "images/0304ebcb-e3e0-4a74-82ba-f717b6730f86.jpg", "images/0576553a-96c5-4f16-b86b-ad47ee5357dc.jpg", "images/10636336-1b16-4bf2-9583-51b6bdba87df-768x1024.jpg", "images/15c01411-2632-40c5-bcf1-f65ddde71d6b.jpg", "images/3b107901-bb3f-41df-96cd-63ecc14b5466.jpg", "images/43ea6522-946b-4540-9c2c-97ada2af380a.jpg", "images/5e653c8b-9234-458f-b780-63b73968c892.jpg", "images/681406c9-bbec-404c-b9ef-b1e85576ce1c.jpg", "images/78a2d185-e92d-4731-8ab2-1ff112439e83.jpg", "images/92b1ac46-44f0-4e42-96fd-374f7832be19.jpg", "images/a5d0fb3a-50fd-48d9-9e42-c05254d36aa2.jpg", "images/ad8f3651-e236-49d3-b931-139ba1636652.jpg", "images/c80be2fa-97e4-42bc-ac2b-12c3bf94317b.jpg", "images/chlorine-tank.jpg", "../../src/images/d478a113-24cf-45e8-950c-580c7af5176a.jpg", "../../src/images/ddd9fc86-f051-4a33-b9b3-6faf5a3510b6-1024x768.jpg", "../../src/images/f6b6cca8-1dd8-49e6-bffe-a6504f8a5eb7-1024x769.jpg", "../../src/images/image-12-1024x576.jpg", "../../src/images/image.jpg", "../../src/images/image_water.jpg", "../../src/images/image_water_treatment.jpg", "../../src/images/images-2.jpg", "../../src/images/img-.jpg", "../../src/images/IMG-3497b3256567413e32cd7c422b76e149-V-1024x768.jpg"]


const container = document.getElementsByClassName('slide')[0];

// Loop through the images array
images.forEach((image) => {
  // Create a new div element
  const div = document.createElement('div');
  div.className = 'item';

  // Set the background image style
  div.style.backgroundImage = `url('${image}')`;

  // Append the div to the container
  container.appendChild(div);
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
