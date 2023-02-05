import React from "react";

function homepage() {
  return (
    <div>
      <nav class="navbar fixed-top">
        <div class="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          <a
            class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
            href="index.html"
          >
            <img src="images/logo.svg" alt="alternative" class="h-8" />
          </a>

          <button
            class="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
            type="button"
            data-toggle="offcanvas"
          >
            <span class="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
          </button>

          <div
            class="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
            id="navbarsExampleDefault"
          >
            <ul class="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
              <li>
                <a class="nav-link page-scroll active" href="#header">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#details">
                  Details
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#pricing">
                  Pricing
                </a>
              </li>
              <li class="dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Drop
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                  <a class="dropdown-item page-scroll" href="article.html">
                    Article Details
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item page-scroll" href="terms.html">
                    Terms Conditions
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item page-scroll" href="privacy.html">
                    Privacy Policy
                  </a>
                </div>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#download">
                  Download
                </a>
              </li>
            </ul>
            <span class="block lg:ml-3.5">
              <a class="no-underline" href="#your-link">
                <i class="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
              </a>
              <a class="no-underline" href="#your-link">
                <i class="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
              </a>
            </span>
          </div>
        </div>
      </nav>
      {/* <!-- end of navigation --> */}

      {/* <!-- Header --> */}
      <header
        id="header"
        class="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
      >
        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div class="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
            <h1 class="h1-large mb-5">Team management mobile application</h1>
            <p class="p-large mb-8">
              Start getting things done together with your team based on Pavo's
              revolutionary team management features
            </p>
            <a class="btn-solid-lg" href="#your-link">
              <i class="fab fa-apple"></i>Download
            </a>
            <a class="btn-solid-lg secondary" href="#your-link">
              <i class="fab fa-google-play"></i>Download
            </a>
          </div>
          <div class="xl:text-right">
            <img
              class="inline"
              src="images/header-smartphone.png"
              alt="alternative"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default homepage;
