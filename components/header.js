import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import { YoutubeOutlined, FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import Slide from "react-reveal/Slide";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const dynamicRouter = useRouter().asPath;

  useEffect(() => {
    setOpen(false);
  }, [router]);

  const [open, setOpen] = useState(false);

  const [visible, setVisible] = useState(true);
  var prevScrollpos;

  useEffect(() => {
    prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }, [prevScrollpos]);

  return (
    <div className={open ? "menu-active" : "menu-closed"}>
      <Slide top>
        <div className="social-bar-menu" dir="ltr">
          <span>
            <a href="https://wa.me/96176523875" target="_blank" rel="noopener noreferrer">
              {" "}
              00961 76 523 875
            </a>
          </span>
          <span> | </span>
          <span>
            {" "}
            <div style={{ width: "25px" }}>
              <a href="https://www.instagram.com/al_warsheh" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    id="Vector"
                    d="M128 23.0635C162.177 23.0635 166.225 23.1936 179.722 23.8094C192.202 24.379 198.98 26.4642 203.491 28.2166C209.465 30.5387 213.729 33.3129 218.208 37.7917C222.687 42.2706 225.461 46.5351 227.783 52.5093C229.536 57.0201 231.621 63.7977 232.191 76.277C232.806 89.7746 232.936 93.8226 232.936 128C232.936 162.178 232.806 166.226 232.191 179.723C231.621 192.203 229.536 198.98 227.783 203.491C225.461 209.465 222.687 213.73 218.208 218.209C213.729 222.688 209.465 225.462 203.491 227.783C198.98 229.536 192.202 231.622 179.722 232.191C166.227 232.807 162.179 232.937 128 232.937C93.8201 232.937 89.7721 232.807 76.277 232.191C63.7971 231.622 57.0196 229.536 52.5093 227.783C46.5346 225.462 42.2701 222.688 37.7912 218.209C33.3124 213.73 30.5381 209.465 28.2166 203.491C26.4637 198.98 24.3785 192.203 23.8089 179.723C23.1931 166.226 23.063 162.178 23.063 128C23.063 93.8226 23.1931 89.7746 23.8089 76.2775C24.3785 63.7977 26.4637 57.0201 28.2166 52.5093C30.5381 46.5351 33.3124 42.2706 37.7912 37.7917C42.2701 33.3129 46.5346 30.5387 52.5093 28.2166C57.0196 26.4642 63.7971 24.379 76.2765 23.8094C89.7741 23.1936 93.8221 23.0635 128 23.0635ZM128 0C93.2368 0 88.8783 0.147348 75.2258 0.770275C61.6011 1.39219 52.2969 3.55566 44.1546 6.72009C35.7375 9.99122 28.5992 14.368 21.4833 21.4839C14.3675 28.5998 9.99071 35.738 6.71958 44.1551C3.55515 52.2974 1.39168 61.6017 0.769767 75.2263C0.14684 88.8783 0 93.2373 0 128C0 162.763 0.14684 167.122 0.769767 180.774C1.39168 194.399 3.55515 203.703 6.71958 211.845C9.99071 220.262 14.3675 227.401 21.4833 234.517C28.5992 241.633 35.7375 246.009 44.1546 249.28C52.2969 252.445 61.6011 254.608 75.2258 255.23C88.8783 255.853 93.2368 256 128 256C162.763 256 167.122 255.853 180.774 255.23C194.398 254.608 203.703 252.445 211.845 249.28C220.262 246.009 227.4 241.633 234.516 234.517C241.632 227.401 246.009 220.262 249.28 211.845C252.444 203.703 254.608 194.399 255.23 180.774C255.853 167.122 256 162.763 256 128C256 93.2373 255.853 88.8783 255.23 75.2263C254.608 61.6017 252.444 52.2974 249.28 44.1551C246.009 35.738 241.632 28.5998 234.516 21.4839C227.4 14.368 220.262 9.99122 211.845 6.72009C203.703 3.55566 194.398 1.39219 180.774 0.770275C167.122 0.147348 162.763 0 128 0ZM128 62.2703C91.6983 62.2703 62.2698 91.6988 62.2698 128C62.2698 164.302 91.6983 193.73 128 193.73C164.301 193.73 193.73 164.302 193.73 128C193.73 91.6988 164.301 62.2703 128 62.2703ZM128 170.667C104.436 170.667 85.3328 151.564 85.3328 128C85.3328 104.436 104.436 85.3333 128 85.3333C151.564 85.3333 170.667 104.436 170.667 128C170.667 151.564 151.564 170.667 128 170.667ZM211.686 59.6734C211.686 68.1566 204.81 75.0337 196.327 75.0337C187.843 75.0337 180.966 68.1566 180.966 59.6734C180.966 51.1902 187.843 44.3137 196.327 44.3137C204.81 44.3137 211.686 51.1902 211.686 59.6734Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </span>
          <span>
            {" "}
            <div style={{ width: "15px" }}>
              <a href="https://www.facebook.com/Al.Warsheh/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 97">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    id="Vector"
                    d="M50.012 0.02L37.547 0C23.543 0 14.493 9.285 14.493 23.656V34.563H1.96C0.877001 34.563 0 35.441 0 36.524V52.327C0 53.41 0.878001 54.287 1.96 54.287H14.493V94.163C14.493 95.246 15.37 96.123 16.453 96.123H32.805C33.888 96.123 34.765 95.245 34.765 94.163V54.287H49.419C50.502 54.287 51.379 53.41 51.379 52.327L51.385 36.524C51.385 36.004 51.178 35.506 50.811 35.138C50.444 34.77 49.944 34.563 49.424 34.563H34.765V25.317C34.765 20.873 35.824 18.617 41.613 18.617L50.01 18.614C51.092 18.614 51.969 17.736 51.969 16.654V1.98C51.969 0.899 51.093 0.022 50.012 0.02Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>{" "}
          </span>
          <span>
            {" "}
            <div style={{ width: "120px" }}>
              <a href="https://www.youtube.com/channel/UCnPTAJpazYO3NdMGsDUoRhQ" target="_blank " rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30">
                  <path
                    fill="white"
                    d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                  ></path>
                  <text x="35" y="22" fill="white">
                    YouTube
                  </text>
                </svg>
              </a>
            </div>{" "}
          </span>
        </div>

        <nav className={visible ? "navbar" : "navbar navbarTop"}>
          {/* <div className={size < 120 ? "social-icons-flex" : "social-icons"}>
            <Link href="/">
              <a>
                <YoutubeOutlined className="social-icon" />
              </a>
            </Link>

            <Link href="/">
              <a>
                <FacebookOutlined className="social-icon" />
              </a>
            </Link>

            <Link href="/">
              <a>
                <InstagramOutlined className="social-icon" />
              </a>
            </Link>
          </div> */}
          <div className="push-left">
            <button onClick={() => setOpen(!open)} id="menu-toggler" className="hamburger">
              <span className="hamburger-line hamburger-line-top"></span>
              <span className="hamburger-line hamburger-line-middle"></span>
              <span className="hamburger-line hamburger-line-bottom"></span>
            </button>

            <ul id="primary-menu" className="menu nav-menu">
              <li className="menu-item ">
                <Link href="/">
                  <a className="nav__link">الصفحة الرئيسية</a>
                </Link>
              </li>

              <li className="menu-item current-menu-item">
                <Link href="/about">
                  <a className="nav__link">مين نحنا</a>
                </Link>
              </li>

              <li className="menu-item current-menu-item">
                <Link href="/about/#drKhaledGhattas">
                  <a className="nav__link">مين د. خالد غطاس </a>
                </Link>
              </li>

              <li className="menu-item current-menu-item">
                <Link href="/activities">
                  <a className="nav__link">ورش عمل</a>
                </Link>
              </li>

              <li className="menu-item current-menu-item">
                <Link href="/events">
                  <a className="nav__link">شو في هل الشهر</a>
                </Link>
              </li>

              {/* <li className="menu-item dropdown">
                <Link href="/events">
                  <a className="nav__link">البرامج</a>
                </Link>
                <ul className="sub-nav">
                  <li>
                    <a className="sub-nav__link" href="#">
                      link 1
                    </a>
                  </li>
                  <li>
                    <a className="sub-nav__link" href="#">
                      link 2
                    </a>
                  </li>
                  <li>
                    <a className="sub-nav__link" href="#">
                      link 3 -
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item dropdown">
                <Link href="/activities">
                  <a className="nav__link">الأنشطة</a>
                </Link>
                <ul className="sub-nav">
                  <li>
                    <a className="sub-nav__link" href="#">
                      link 1
                    </a>
                  </li>
                  <li>
                    <a className="sub-nav__link" href="#">
                      link 2
                    </a>
                  </li>
                  <li>
                    <a className="sub-nav__link" href="#">
                      link 3
                    </a>
                  </li>
                </ul>
              </li> */}

              <li className="menu-item current-menu-item">
                <Link href="/contact">
                  <a className="nav__link">حكونا </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo">
            <Link href="/">
              <a>
                {" "}
                <Image
                  // width={Math.max(250 - size, 50)}
                  // height={Math.max(100 - size, 50)}
                  width={100}
                  height={40}
                  src="/images/logos/logo.svg"
                  alt="LOGO"
                />{" "}
              </a>
            </Link>
          </div>
        </nav>
      </Slide>
    </div>
  );
};

export default Header;
