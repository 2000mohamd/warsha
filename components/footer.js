import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        {/* <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg> */}
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <h1>
                  <Image
                    width="250"
                    height="100"
                    alt="Al Warsheh"
                    src="/images/logos/logo-footer.svg"
                  />
                </h1>
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> عراف أكتر</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li
                  id="menu-item-173728"
                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-173728"
                >
                  <Link href="/about/#alwarshe">
                    <a>مين نحنا</a>
                  </Link>
                </li>
                <li
                  id="menu-item-173730"
                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-173730"
                >
                  <Link href="/about/#drKhaledGhattas">
                    <a>مين د. خالد غطاس </a>
                  </Link>
                </li>
                <li
                  id="menu-item-173727"
                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-173727"
                >
                  <Link href="/#activities">
                    <a> شو منعمل</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> الورشة</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li
                  id="menu-item-167408"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167408"
                >
                  <Link href="/activities/#mawdou3-kbir">
                    <a>فتحولنا موضوع كبيير </a>
                  </Link>
                </li>
                <li
                  id="menu-item-167409"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-167409"
                >
                  <Link href="/activities/#jam3a-3akher">
                    <a>جمعة عخير</a>
                  </Link>
                </li>
                <li
                  id="menu-item-171917"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-171917"
                >
                  <Link href="/activities/#warshe-belwarshe">
                    <a>ورشة بالورشة</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> إقرأ ● شوف ● إسمع ●</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li
                  id="menu-item-170434"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434"
                >
                  <Link href="/activities/#movie-club">
                    <a>نادي السينما</a>
                  </Link>
                </li>
                <li
                  id="menu-item-179115"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-179115"
                >
                  <Link href="/activities/#book-club">
                    <a>نادي الكتاب</a>
                  </Link>
                </li>
                <li
                  id="menu-item-178960"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178960"
                >
                  <Link href="/activities/#music-club">
                    <a>نادي الموسيقى</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> روابط سريعة</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li
                  id="menu-item-168092"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-168092"
                >
                  <Link href="/events/#new">
                    <a>شو في هل الشهر</a>
                  </Link>
                </li>
                {/* <li id="menu-item-167955" className="menu-item menu-item-type-post_type_archive menu-item-object-customer menu-item-167955">
                  <a href="#">Whatsapp</a>
                </li> */}
                <li
                  id="menu-item-167418"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-167418"
                >
                  <a
                    href="https://www.facebook.com/Al.Warsheh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li
                  id="menu-item-167954"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167954"
                >
                  <a
                    href="https://www.instagram.com/al_warsheh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li
                  id="menu-item-167423"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167423"
                >
                  <a
                    href="https://www.youtube.com/channel/UCnPTAJpazYO3NdMGsDUoRhQ"
                    target="_blank "
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </li>

                {/* <li id="menu-item-170700" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-170700">
                  <a href="#">Reviews</a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> خلينا نحكي </h2>
              <p className="footer-call-to-action-description">
                {" "}
                عندك سؤال ؟ حابب تشارك ؟{" "}
              </p>
              <Link href="/contact">
                <a
                  className="footer-call-to-action-button button"
                  href="#"
                  target="_self"
                >
                  تواصل معنا
                </a>
              </Link>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> حكونا</h2>
              <p className="footer-call-to-action-link-wrapper">
                <a
                  className="footer-call-to-action-link"
                  href="https://wa.me/96176523875"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                >
                  00961 76 523 875
                </a>
              </p>
            </div>
          </div>
          <div className="footer-social-links">
            <svg
              className="footer-social-amoeba-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 236 54"
            >
              <path
                className="footer-social-amoeba-path"
                d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
              ></path>
            </svg>
            <a
              className="footer-social-link instagram"
              href="https://www.instagram.com/al_warsheh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden-link-text">Instagram</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path
                  className="footer-social-icon-path"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Vector"
                  d="M128 23.0635C162.177 23.0635 166.225 23.1936 179.722 23.8094C192.202 24.379 198.98 26.4642 203.491 28.2166C209.465 30.5387 213.729 33.3129 218.208 37.7917C222.687 42.2706 225.461 46.5351 227.783 52.5093C229.536 57.0201 231.621 63.7977 232.191 76.277C232.806 89.7746 232.936 93.8226 232.936 128C232.936 162.178 232.806 166.226 232.191 179.723C231.621 192.203 229.536 198.98 227.783 203.491C225.461 209.465 222.687 213.73 218.208 218.209C213.729 222.688 209.465 225.462 203.491 227.783C198.98 229.536 192.202 231.622 179.722 232.191C166.227 232.807 162.179 232.937 128 232.937C93.8201 232.937 89.7721 232.807 76.277 232.191C63.7971 231.622 57.0196 229.536 52.5093 227.783C46.5346 225.462 42.2701 222.688 37.7912 218.209C33.3124 213.73 30.5381 209.465 28.2166 203.491C26.4637 198.98 24.3785 192.203 23.8089 179.723C23.1931 166.226 23.063 162.178 23.063 128C23.063 93.8226 23.1931 89.7746 23.8089 76.2775C24.3785 63.7977 26.4637 57.0201 28.2166 52.5093C30.5381 46.5351 33.3124 42.2706 37.7912 37.7917C42.2701 33.3129 46.5346 30.5387 52.5093 28.2166C57.0196 26.4642 63.7971 24.379 76.2765 23.8094C89.7741 23.1936 93.8221 23.0635 128 23.0635ZM128 0C93.2368 0 88.8783 0.147348 75.2258 0.770275C61.6011 1.39219 52.2969 3.55566 44.1546 6.72009C35.7375 9.99122 28.5992 14.368 21.4833 21.4839C14.3675 28.5998 9.99071 35.738 6.71958 44.1551C3.55515 52.2974 1.39168 61.6017 0.769767 75.2263C0.14684 88.8783 0 93.2373 0 128C0 162.763 0.14684 167.122 0.769767 180.774C1.39168 194.399 3.55515 203.703 6.71958 211.845C9.99071 220.262 14.3675 227.401 21.4833 234.517C28.5992 241.633 35.7375 246.009 44.1546 249.28C52.2969 252.445 61.6011 254.608 75.2258 255.23C88.8783 255.853 93.2368 256 128 256C162.763 256 167.122 255.853 180.774 255.23C194.398 254.608 203.703 252.445 211.845 249.28C220.262 246.009 227.4 241.633 234.516 234.517C241.632 227.401 246.009 220.262 249.28 211.845C252.444 203.703 254.608 194.399 255.23 180.774C255.853 167.122 256 162.763 256 128C256 93.2373 255.853 88.8783 255.23 75.2263C254.608 61.6017 252.444 52.2974 249.28 44.1551C246.009 35.738 241.632 28.5998 234.516 21.4839C227.4 14.368 220.262 9.99122 211.845 6.72009C203.703 3.55566 194.398 1.39219 180.774 0.770275C167.122 0.147348 162.763 0 128 0ZM128 62.2703C91.6983 62.2703 62.2698 91.6988 62.2698 128C62.2698 164.302 91.6983 193.73 128 193.73C164.301 193.73 193.73 164.302 193.73 128C193.73 91.6988 164.301 62.2703 128 62.2703ZM128 170.667C104.436 170.667 85.3328 151.564 85.3328 128C85.3328 104.436 104.436 85.3333 128 85.3333C151.564 85.3333 170.667 104.436 170.667 128C170.667 151.564 151.564 170.667 128 170.667ZM211.686 59.6734C211.686 68.1566 204.81 75.0337 196.327 75.0337C187.843 75.0337 180.966 68.1566 180.966 59.6734C180.966 51.1902 187.843 44.3137 196.327 44.3137C204.81 44.3137 211.686 51.1902 211.686 59.6734Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              className="footer-social-link whatsapp"
              href="https://wa.me/96176523875"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden-link-text">whatsapp</span>
              <svg
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 36.671L2.572 27.263C0.990718 24.4999 0.161162 21.3706 0.166 18.187C0.147 8.151 8.248 0 18.205 0C23.036 0 27.573 1.885 30.99 5.323C34.407 8.761 36.28 13.326 36.28 18.187C36.28 28.205 28.18 36.357 18.223 36.357C15.2039 36.3609 12.2333 35.5977 9.59 34.139L0 36.671V36.671ZM10.013 30.867L10.564 31.2C12.8754 32.577 15.5155 33.3049 18.206 33.307C26.472 33.307 33.214 26.523 33.214 18.206C33.214 14.176 31.653 10.369 28.824 7.522C25.993 4.677 22.209 3.087 18.204 3.087C9.919 3.087 3.177 9.871 3.177 18.188C3.177 21.035 3.967 23.826 5.474 26.228L5.823 26.802L4.298 32.384L10.011 30.868L10.013 30.867Z"
                  fill="url(#paint0_linear_203_12)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.684 9.795C13.354 9.037 12.986 9.019 12.674 9.019C12.398 9 12.104 9 11.792 9C11.498 9 11.002 9.111 10.58 9.573C10.157 10.035 9 11.126 9 13.363C9 15.599 10.617 17.762 10.837 18.057C11.057 18.353 13.96 23.085 18.552 24.915C22.373 26.43 23.145 26.135 23.972 26.042C24.798 25.95 26.635 24.952 27.021 23.879C27.388 22.826 27.388 21.902 27.278 21.717C27.168 21.532 26.855 21.421 26.414 21.181C25.955 20.959 23.751 19.851 23.328 19.702C22.906 19.554 22.612 19.48 22.318 19.924C22.024 20.386 21.161 21.403 20.885 21.698C20.628 21.994 20.353 22.031 19.912 21.809C19.452 21.588 18.002 21.107 16.274 19.554C14.934 18.353 14.034 16.856 13.758 16.412C13.501 15.95 13.721 15.71 13.96 15.488C14.162 15.285 14.42 14.952 14.64 14.693C14.86 14.434 14.933 14.231 15.099 13.935C15.246 13.64 15.172 13.362 15.062 13.141C14.952 12.937 14.088 10.701 13.684 9.795V9.795Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_203_12"
                    x1="18.137"
                    y1="36.675"
                    x2="18.137"
                    y2="0.00500089"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F9F9F9" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a
              className="footer-social-link youtube"
              href="https://www.youtube.com/channel/UCnPTAJpazYO3NdMGsDUoRhQ"
              target="_blank "
              rel="noopener noreferrer"
            >
              <span className="hidden-link-text">Youtube</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                ></path>
              </svg>
            </a>
            <a
              className="footer-social-link facebook"
              href="https://www.facebook.com/Al.Warsheh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden-link-text">Facebook</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 97"
              >
                <path
                  className="footer-social-icon-path"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Vector"
                  d="M50.012 0.02L37.547 0C23.543 0 14.493 9.285 14.493 23.656V34.563H1.96C0.877001 34.563 0 35.441 0 36.524V52.327C0 53.41 0.878001 54.287 1.96 54.287H14.493V94.163C14.493 95.246 15.37 96.123 16.453 96.123H32.805C33.888 96.123 34.765 95.245 34.765 94.163V54.287H49.419C50.502 54.287 51.379 53.41 51.379 52.327L51.385 36.524C51.385 36.004 51.178 35.506 50.811 35.138C50.444 34.77 49.944 34.563 49.424 34.563H34.765V25.317C34.765 20.873 35.824 18.617 41.613 18.617L50.01 18.614C51.092 18.614 51.969 17.736 51.969 16.654V1.98C51.969 0.899 51.093 0.022 50.012 0.02Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              {/* <a className="footer-copyright-link" href="#" target="_self"> */}
              © 2022 | AL WARSHEH | All rights reserved
              {/* </a> */}
            </p>
            <p className="footer-developer-text">
              <a
                className="footer-developer-link"
                href="https://thelearnaholics.com"
                target="_Blank"
                rel="noreferrer"
              >
                Website by The Learnaholics
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
