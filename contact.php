<!DOCTYPE html>
<html lang="en">

<?php include "./head.php" ?>

<body>
  <?php include "./navbar.php" ?>
  <!-- ------------------ main section ------------------------ -->
  <section class="contact">
    <div class="header">
      Contact us
    </div>
    <div class="main-container">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.983757231799!2d85.32390617532414!3d27.717787776176646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1911da1c9fd3%3A0x658a4e7a4e595287!2sSupreme%20Associates%20Traders!5e0!3m2!1sen!2snp!4v1721278745061!5m2!1sen!2snp"
          width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="contact-content">
        <div class="detail">
          <div class="detail-contact">
            <div class="detail-title">Let's talk with us</div>
            <div class="detail-paragraph">
              Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
            </div>
            <div class="location">
              <div class="address">
                <i class="fa-solid fa-location-dot"></i>
                <div class="address-details">
                  <a style="text-decoration: none; color: black;"
                    href="https://www.google.com/maps/search/?api=1&query=Gairidhara+Marg,+Kathmandu,+Nepal"
                    target="_blank">Gairidhara Marg, Kathmandu, Nepal</a>
                </div>
              </div>
              <div class="phone">
                <i class="fa-solid fa-phone-volume"></i>
                <div class="phone-details">
                  <a style="text-decoration: none; color: black;" href="tel:014439218">014439218</a>
                </div>

              </div>
              <div class="mail">
                <i class="fa-regular fa-envelope"></i>
                <div class="mail-details"> <a href="mailto:info@sat.com.np"
                    style="text-decoration: none; color: black;">info@sat.com.np</a></div>
              </div>

            </div>
            <div class="social-link">
              <div class="follow">
                Follow us
              </div>
              <div class="links">
                <a href="https://www.facebook.com/supremeassociates"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.linkedin.com/company/supreme-associates-traders/"><i
                    class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/supreme.associates_123/"><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="form-content">
            <div class="form">
              <input type="text" name="first" placeholder="Full Name*" required>
              <input type="text" name="email" placeholder="Email*" required>
              <input type="text" name="number" placeholder="Phone Number*" required>
              <textarea name="message" id="message" placeholder="Your Message..." required></textarea>
            </div>
            <div class="contact-btn submit">
              Send Message
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ------------------ main section end heres ------------------------ -->
  <!-- ------------------ footer section ------------------------ -->
  <section class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="section logo">
          <div class="image">
            <img src="image/logo.png" alt="Supreme Associates Traders" />
          </div>
          <p>
            We are a team of certified water treatment professionals who have
            been active in the market since 2010 A.D. In the field of water
            treatment, our key experts have more than 20 years of experience.
          </p>
        </div>

        <div class="section address">
          <h2>Address</h2>
          <p>
            <i class="fas fa-map-marker-alt"></i> <a
              href="https://www.google.com/maps/search/?api=1&query=Gairidhara+Marg,+Kathmandu,+Nepal" target="_blank"
              class="mail">Gairidhara Marg, Kathmandu,
              Nepal</a>
          </p>
          <p><i class="fas fa-phone-alt"></i> <a href="tel:014439218" class="mail">CallUs: 014439218</a><br></p>
          <p><i class="fas fa-envelope"></i> <a class="mail" href="mailto:info@sat.com.np">info@sat.com.np</a></p>
        </div>

        <div class="section useful-links">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="./about.html">About us</a></li>
            <li><a href="./image.html">Images</a></li>
            <li><a href="./blog.html">Our Blog</a></li>
            <li><a href="./contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div class="section">
          <h2>Products</h2>
          <ul>
            <li>Waste Water treatment Plant</li>
            <li>Sewage Treatment Plant</li>
            <li>Effluent Treatment Plant</li>
            <li>Chlorination System</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© SAT 2024 | All rights reserved</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  </section>
  <!-- ------------------ footer section end heres ------------------------ -->
  <script src="Assets/js/component.js"></script>
</body>

</html>