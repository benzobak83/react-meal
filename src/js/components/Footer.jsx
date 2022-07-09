import React from "react";
import img1 from "../../assets/img/footer1.png";
import img2 from "../../assets/img/footer2.png";
import img3 from "../../assets/img/footer3.png";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container footer-flex">
          <div className="copyright" style={{ display: "inline-block" }}>
            © {new Date().getFullYear()} Copyright Text
          </div>
          <div style={{ display: "inline-block" }} className="img-wrapper">
            <img src={img1}></img>
            <img src={img2}></img>
            <img src={img3}></img>
          </div>
          <a className="grey-text text-lighten-4 right" href="#!">
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
