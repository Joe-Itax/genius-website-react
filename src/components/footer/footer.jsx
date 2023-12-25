import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import tailwindContext from "../../context/tailwind-context";


export default function Footer(){
  const myCustomClassName = useContext(tailwindContext);
  return (
    <footer className={`px-2 py-0 md:px-4 lg:px-8 xl:px-16 bg-[#191919] text-gray-100 flex flex-col text-[1.1rem] pb-4`}>
      <div className="flex flex-col lg:flex-row justify-between items-center pt-0 lg:py-8 lg:px-0">
        <div className="logo-box">
          <span className={`${myCustomClassName.flexJCC_AIC} py-8 px-0 gap-1`}>
            <i className="ri-at-line text-3xl" />
            <span className={`text-2xl font-bold`}>Genius</span>
          </span>
        </div>
        <nav className={`w-full md:w-auto flex flex-wrap items-center justify-between font-medium`}>
          <ul className={`${myCustomClassName.flexJCC_AIC} w-full md:w-auto flex-wrap gap-5 sm:pr-3`}>
            <li>
              <Link to="./" className={`${myCustomClassName.transition} hover:text-[#B97AE0]`}>Accueil</Link>
            </li>
            <li>
              <Link to="./services" className={`${myCustomClassName.transition} hover:text-[#B97AE0]`}>Services</Link>
            </li>
            <li>
              <Link to="./realisations" className={`${myCustomClassName.transition} hover:text-[#B97AE0]`}>Nos Réalisations</Link>
            </li>
            <li>
              <Link to="./about" className={`${myCustomClassName.transition} hover:text-[#B97AE0]`}>A Propos</Link>
            </li>
            <li>
              <Link to="./contact" className={`${myCustomClassName.transition} hover:text-[#B97AE0]`}>Contact</Link>
            </li>
          </ul>
          <div className={`${myCustomClassName.flexJCC_AIC} w-full md:w-auto flex-col lg:flex-row flex-wrap gap-4 rounded-xl py-4 pr-2 pl-5 ${myCustomClassName.myBorder}`}>
            <div>
              <span>Restez Connecté</span>
            </div>
            <div className={`${myCustomClassName.flexJCC_AIC} gap-2`}>
              <Link to="https://facebook.com/joseph-itakala.102" target="_blank" className={`${myCustomClassName.transition} border border-solid border-[#2E2E2E] border-b-0 rounded-lg p-3 bg-gradient-to-b from-[#242424] from-0% to-[rgba(36, 36, 36, 0)] to-100%`}>
                <i className="ri-facebook-circle-fill text-2xl" />
              </Link>
              <Link to="https://twitter.com/Joseph_Itakala" target="_blank" className={`${myCustomClassName.transition} border border-solid border-[#2E2E2E] border-b-0 rounded-lg p-3 bg-gradient-to-b from-[#242424] from-0% to-[rgba(36, 36, 36, 0)] to-100%`}>
                <i className="ri-twitter-x-fill text-2xl" />
              </Link>
              <Link
                href="https://linkedin.com/in/joseph-itakala-2a6465250"
                target="_blank" className={`${myCustomClassName.transition} border border-solid border-[#2E2E2E] border-b-0 rounded-lg p-3 bg-gradient-to-b from-[#242424] from-0% to-[rgba(36, 36, 36, 0)] to-100%`}
              >
                <i className="ri-linkedin-box-fill text-2xl" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="footer_second_part">
        <div className="info_about_us-box">
          <Link
            href="mailto: interne.genius@gmail.com"
            target="_blank"
            className="info_about_us-email"
          >
            <i className="ri-mail-fill" />
            <span>interne.genius@gmail.com</span>
          </Link>
          <Link
            href="https://wa.me/243977873421"
            target="_blank"
            className="info_about_us-wa_me"
          >
            <i className="ri-whatsapp-fill" />
            <span>+243 977 873 421</span>
          </Link>
          <div className="info_about_us-adresse">
            <i className="ri-map-pin-fill" />
            <span>Kinshasa-RDC</span>
          </div>
        </div>
        <div className="copyright-box">
          <span>© 2023 Genius. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  )
}