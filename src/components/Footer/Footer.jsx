import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="rows inner-content">
          <div className="cols first-col">
            <div className="footer-head">
              <img src="/assets/companyimg-removebg-preview.png" alt="" />
            </div>
            <div className="contact-info">
              <div className="contact-info-txt">
                <img
                  src="/assets/startup-removebg-preview.png"
                  alt="startup-img"
                />
              </div>
              <div className="comp-provide">Connect with us </div>
              <div className="footer-social">
                <a href="https://in.linkedin.com/company/jobringer" target=" ">
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "blue" }}
                  ></i>
                </a>
                <a href=" " target=" ">
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "red" }}
                  ></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCE2yLiRuBlfAEVVVEidbzdg"
                  target=" "
                >
                  <i
                    className="fa-brands fa-youtube"
                    style={{ color: "red" }}
                  ></i>
                </a>
                <a href="https://x.com/jobs_jobringer" target=" ">
                  <i
                    className="fa-brands fa-x-twitter"
                    style={{ color: "black" }}
                  ></i>
                </a>
                <a
                  href=" https://www.whatsapp.com/channel/0029VaL3vjg0LKZJrpFc440L"
                  target=" "
                >
                  <i
                    className="fa-brands fa-whatsapp"
                    style={{ color: "green" }}
                  ></i>
                </a>
                <a href="https://telegram.me/jobs_jobringer" target=" ">
                  <i
                    className="fa-brands fa-telegram"
                    style={{ color: "blue" }}
                  ></i>
                </a>
                <a href="https://www.facebook.com/jobwithjobringer/" target=" ">
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "blue" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="footer-bullets">Company</div>
            <div className="contact-info">
              <div className="contact-info-txt">
                <a href="">About Us </a>
              </div>
              <div className="contact-info-txt">
                <a href="">Our Team </a>
              </div>
              <div className="contact-info-txt">
                <a href="">Blog</a>
              </div>
              <div className="contact-info-txt">
                <a href="">Success Stories</a>
              </div>
              <div className="contact-info-txt">
                <a href="">Advertise With US</a>
              </div>
              <div className="contact-info-txt">
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="footer-bullets">Candidate Zone</div>
            <div className="contact-info">
              <div className="contact-info-txt"> Premium Membership</div>
              <div className="contact-info-txt">Placement Preparation</div>
              <div className="contact-info-txt">
                Jobs Roles & Responsibilities
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="footer-bullets">Employers Zone</div>
            <div className="contact-info">
              <div className="contact-info-txt"> Post Job for Free</div>
              <div className="contact-info-txt"> Online Assesment</div>
              <div className="contact-info-txt"> Resume Search</div>
              <div className="contact-info-txt"> Campus Recruitment</div>
            </div>
          </div>
        </div>
        <div className="hr" />
        <div className="copyright">
          <div className="company-img">
            <img src="/assets/companyimg.png" alt="" />
          </div>
          <div>
            <div>All trademark are the property of their respective owners</div>
            <div>
              All rights are reserved 2025{" "}
              <span>
                <a href="https://www.jobringer.com/" target=" ">
                  Jobringer.com
                </a>
              </span>
            </div>
          </div>
          <div className="install-app">
            <div>
              <img src="/assets/play-store.png" alt="get it on play store" />
            </div>
            <div className="install-app">
              <img src="/assets/apple-store.png" alt="get it on apple store" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
