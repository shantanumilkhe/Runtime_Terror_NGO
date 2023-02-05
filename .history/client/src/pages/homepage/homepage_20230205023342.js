import React from "react";
import "./fontawesome-all.css";
import "./magnific-popup.css";
import "./styles.css";

function homepage() {
  return (
    <div className="bg-gray-700">
      <nav className="navbar fixed-top">
        <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          <a
            className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
            href="index.html"
          >
            <h5 className="text-white">Education.IO</h5>
            {/* <img src="images/logo.svg" alt="alternative" className="h-8" /> */}
          </a>

          <button
            className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
            id="navbarsExampleDefault"
          >
            <ul className=" pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
              <li>
                <a className="nav-link page-scroll active" href="#header">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#details">
                  Volunteer
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#pricing">
                  Institute
                </a>
              </li>
              <li className="dropdown">
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item page-scroll" href="article.html">
                    Article Details
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item page-scroll" href="terms.html">
                    Terms Conditions
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item page-scroll" href="privacy.html">
                    Privacy Policy
                  </a>
                </div>
              </li>
            </ul>
            <span className="block lg:ml-3.5">
              <a className="no-underline" href="#your-link">
                <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
              </a>
              <a className="no-underline" href="#your-link">
                <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
              </a>
            </span>
          </div>
        </div>
      </nav>
      {/* <!-- end of navigation --> */}

      {/* <!-- Header --> */}
      <header
        id="header"
        className="header text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
      >
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-16 lg:mt-32 xl:mt-1 xl:mr-12">
            <h1 className="h1-large mb-5">
              Education for everyone available everywhere
            </h1>
            <p className="p-large mb-8 text-white">
              Non-profit organization that provides free education to everyone
            </p>
            <a className="btn-solid-lg" href="#your-link">
              <i className="fab fa-apple"></i>Volunteer
            </a>
            <a className="btn-solid-lg secondary" href="#your-link">
              <i className="fab fa-google-play"></i>Institute
            </a>
          </div>
          <div className="xl:text-right">
            <img
              className="inline"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201611/underprivileged-children-647_111616054051.jpg?VersionId=zoABG8Jv7J967Mmyb37Dwq1GvgwqFkMH"
              alt="StudentImage"
              style={{ borderRadius: "7%", boxShadow: "0 0 10px 0 " }}
            />
          </div>
        </div>
      </header>

      <div id="features" className="cards-1">
        <div className="container px-4 sm:px-8 xl:px-4">
          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-1.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Platform Integration</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform
                without compatibility issues
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-2.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Easy On Resources</h5>
              <p className="mb-4">
                Works smoothly even on older generation hardware due to our
                optimization efforts
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-3.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Great Performance</h5>
              <p className="mb-4">
                Optimized code and innovative technology insure no delays and
                ultra-fast responsiveness
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-4.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Multiple Languages</h5>
              <p className="mb-4">
                Choose from one of the 40 languages that come pre-installed and
                start selling smarter
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-5.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Free Updates</h5>
              <p className="mb-4">
                Don't worry about future costs, pay once and receive all future
                updates at no extra cost
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-6.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Community Support</h5>
              <p className="mb-4">
                Register the app and get acces to knowledge and ideas from the
                Pavo online community
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="details-lightbox"
        className="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
          >
            ×
          </button>
          <div className="lg:col-span-8">
            <div className="mb-12 text-center lg:mb-0 lg:text-left xl:mr-6">
              <img
                className="inline rounded-lg"
                src="images/details-lightbox.jpg"
                alt="alternative"
              />
            </div>
          </div>
          <div className="lg:col-span-4">
            <h3 className="mb-2">Goals Setting</h3>
            <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-indigo-600" />
            <p>
              The app can easily help you track your personal development
              evolution if you take the time to set it up.
            </p>
            <h4 className="mt-7 mb-2.5">User Feedback</h4>
            <p className="mb-4">
              This is a great app which can help you save time and make your
              live easier. And it will help improve your productivity.
            </p>
            <ul className="list mb-6 space-y-2">
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Splash screen panel</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Statistics graph report</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Events calendar layout</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Location details screen</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Onboarding steps interface</div>
              </li>
            </ul>
            <a className="btn-solid-reg mfp-close page-scroll" href="#download">
              Volunteer
            </a>
            <button
              className="btn-outline-reg mfp-close as-button"
              type="button"
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <div className="counter">
        <div className="container px-4 sm:px-8">
          <div id="counter">
            <div className="cell">
              <div className="counter-value number-count" data-count="231">
                1
              </div>
              <p className="counter-info">Happy Users</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count="385">
                1
              </div>
              <p className="counter-info">Issues Solved</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count="159">
                1
              </div>
              <p className="counter-info">Good Reviews</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count="127">
                1
              </div>
              <p className="counter-info">Case Studies</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count="211">
                1
              </div>
              <p className="counter-info">Orders Received</p>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-1 py-32 bg-gray">
        <div className="container px-4 sm:px-8">
          <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">
            What do users think about Education.IO
          </h2>

          <div className="slider-container">
            <div className="swiper-container card-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card">
                    <div className="card-body">
                      <p className="italic mb-3">
                        It's been so fun to work with Education.IO, I've managed
                        to integrate it properly into my academics work flow
                        flow and it's great
                      </p>
                      <p className="testimonial-author">
                        Prince Mishre - student
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Reach out as at:{" "}
            <a
              className="text-indigo-600 hover:text-gray-500"
              href="mailto:email@domain.com"
            >
              RuntimeTerror@spit.ac.in
            </a>
          </h4>
          <div className="social-container">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-pinterest-p fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-youtube fa-stack-1x"></i>
              </a>
            </span>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="copyright">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
            <ul className="mb-4 list-unstyled p-small">
              <li className="mb-2">
                <a href="article.html">Article Details</a>
              </li>
              <li className="mb-2">
                <a href="terms.html">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="privacy.html">Privacy Policy</a>
              </li>
            </ul>
            <p className="pb-2 p-small statement">
              Copyright ©{" "}
              <a href="#your-link" className="no-underline">
                Runtime Terror
              </a>
            </p>

            <p className="pb-2 p-small statement">
              Distributed by :
              <a href="https://themewagon.com/" className="no-underline">
                Runtime Terror
              </a>
            </p>
          </div>
        </div>
        {/* <!-- end of copyright --> */}
      </div>
    </div>
  );
}

export default homepage;
