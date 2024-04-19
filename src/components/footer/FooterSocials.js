import React from "react";
import Facebook from "../../assets/images/socials/facebook.svg";
import Instagram from "../../assets/images/socials/instagram.svg";
import Gmail from "../../assets/images/socials/gmail.svg";
import WhatsApp from "../../assets/images/socials/whatsapp.svg";

const socials = [
  {
    id: 1,
    href: "https://facebook.com",
    img: Facebook,
    name: Facebook
  },
  {
    id: 2,
    href: "https://www.instagram.com",
    img: Instagram,
    name: Instagram
  },
  {
    id: 3,
    href: "mailto:mbf@gmail.com",
    img: Gmail,
    name: Gmail
  },
  {
    id: 4,
    href: "https://me",
    img: WhatsApp,
    name: WhatsApp
}
];

export default class FooterSocials extends React.Component {
  render() {
    return (
      <ul className="socials">
      {socials.map(social =>
      <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
          >
          <span aria-hidden="true">{social.name}</span>
            <img src={social.img} alt="" aria-hidden="true" />
          </a>
        </li>)}
      </ul>
    );
  }
}
