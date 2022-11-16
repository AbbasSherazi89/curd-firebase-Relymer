import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start footer-bg text-muted footer-uper-sec py-3">
        <div className="container">
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />
                    Company name
                  </h6>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-4 footer-lower-sec">
          © 2022 Copyright:{" "}
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Relymer.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
