import React from 'react'

function Footer() {
  return (
    <div className="main">
      <div className="Footer">
        <div className="sub-footer">
          <b>Company</b>
          <p>
            About company <br /> Company services <br /> Job opportunities{" "}
            <br />
            Contact us
          </p>
        </div>
        <div className="sub-footer">
          <b>Customer</b>
          <p>
            Client support <br /> Pricing packages <br /> Company history <br />
            Our process
          </p>
        </div>

        <div className="sub-footer">
          <b>Additional</b>
          <p>
            Our story <br /> Who we are <br /> Our process
            <br />
            Latest news
          </p>
        </div>
        <div className="sub-footer">
          <b>Services</b>
          <p>
            Brand experience <br /> e-Commerce website <br /> Content writing{" "}
            <br />
            Marketing strategy
          </p>
        </div>
      </div>
      <hr id='hr' />
      <img id='imhj' src="https://nubi.uicore.co/advertising-agency/wp-content/uploads/sites/10/2023/04/nubi-logo-1.webp" />
      <span>© 2024 Litho is Proudly Powered by <a href="">ThemeZaa</a></span>
      <b>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-solid fa-earth-americas"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </b>
      <br/><br/><br/>
    </div>
  )
}

export default Footer