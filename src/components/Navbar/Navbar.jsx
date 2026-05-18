import { Link } from "react-router-dom";
import S from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Sobre", to: "/#sobre" },
  { name: "Serviços", to: "/#serviços" },
  { name:  "Portifólio", to: "/#portifolio" },
  { name: "Depoimentos", to: "/#depoimentos" },
  { name: "Contato", to: "/#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header  className={`${S.navbar} ${scrolled ? S.navbar__scrolled : ""}`}>
      
      <div className={S.navbar__inner} >
        <Link to="/" className={S.navbar__brand}>
          Maria Depilação 
        </Link>

        <nav className={`${S.navbar__nav} ${menuOpen ? S.navbar__navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.to} href={link.to} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5521971432926"
          className={S.navbar__cta}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Agenda agora <FaWhatsapp />{" "}
        </a>

        <button
          className={`${S.navbar__burger} ${menuOpen ? S.navbar__burgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
