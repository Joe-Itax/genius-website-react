import { useContext, useState } from "react";
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
        <nav className={`w-full sm:w-auto flex justify-between font-medium`}>
          <ul className={`${myCustomClassName.flexJCC_AIC} flex-wrap gap-4 pr-3`}>
            <li>
              <a href="./">Accueil</a>
            </li>
            <li>
              <a href="./services">Services</a>
            </li>
            <li>
              <a href="./realisations">Nos Réalisations</a>
            </li>
            <li>
              <a href="./about">A Propos</a>
            </li>
            <li>
              <a href="./contact">Contact</a>
            </li>
          </ul>
          <div className="social_media">
            <div>
              <span>Restez Connecté</span>
            </div>
            <div className="social_links_icons">
              <a href="https://facebook.com/joseph-itakala.102" target="_blank">
                <i className="ri-facebook-circle-fill" />
              </a>
              <a href="https://twitter.com/Joseph_Itakala" target="_blank">
                <i className="ri-twitter-x-fill" />
              </a>
              <a
                href="https://linkedin.com/in/joseph-itakala-2a6465250"
                target="_blank"
              >
                <i className="ri-linkedin-box-fill" />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="footer_second_part">
        <div className="info_about_us-box">
          <a
            href="mailto: interne.genius@gmail.com"
            target="_blank"
            className="info_about_us-email"
          >
            <i className="ri-mail-fill" />
            <span>interne.genius@gmail.com</span>
          </a>
          <a
            href="https://wa.me/243977873421"
            target="_blank"
            className="info_about_us-wa_me"
          >
            <i className="ri-whatsapp-fill" />
            <span>+243 977 873 421</span>
          </a>
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