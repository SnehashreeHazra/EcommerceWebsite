import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div
                  class="single-cta"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    columnGap: "8px",
                  }}
                >
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>
                      12B, Outer Circle Road, 7 Green Valley Heights, WB, 713105
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>(+91) 8976541230</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>loremipsum@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  {/* <div class="footer-logo">
                                <a ><img src={logo} class="img-fluid" alt="logo"/></a>
                            </div> */}
                  <div class="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      {/* <a href="#">Women</a> */}
                    </li>
                    <li>
                      {/* <a href="#">Sale</a> */}
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">Best Sellers</a>
                    </li>
                    <li>
                      <a href="#">New Arrivals</a>
                    </li>
                    <li>
                      {/* <a href="#">Collections</a> */}
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>About Us</h3>
                  </div>

                  <div class="footer-text mb-25">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.Lorem ipsum
                      dolor sit amet, consec tetur adipisicing elit, sed do
                      eiusmod tempor incididuntut consec tetur adipisicing
                      elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  {/* <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2024 Sooti. Powered by Snehashree Hazra.
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "white",
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "white",
                        }}
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "white",
                        }}
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "white",
                        }}
                      >
                        Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "white",
                        }}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
