import { useState, useEffect } from "react";

import { FaWhatsapp } from "react-icons/fa";

import S from "./Navbar.module.scss";

const NAV_LINKS = [
  { label: "Sobre", to: "#sobre" },
  { label: "Serviços", to: "#serviços" },
  { label: "Galeria", to: "#galeria" },
  { label: "Comentários", to: "#comentarios" },
  { label: "Contato", to: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${S.navbar} ${scrolled ? S.navbar__scrolled : ""}`}>
      <div className={S.navbar__inner}>
        <a
          href="/"
          className={S.navbar__brand}
          onClick={(e) => {
            e.preventDefault();

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            setMenuOpen(false);
          }}
        >
          Marie Depilação
        </a>

        <nav
          className={`${S.navbar__nav} ${menuOpen ? S.navbar__navOpen : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.to} href={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5521971432926"
          className={S.navbar__cta}
          target="_blank"
          rel="noreferrer"
        >
          Agenda agora
          <FaWhatsapp />
        </a>

        <button
          className={`${S.navbar__burger} ${
            menuOpen ? S.navbar__burgerOpen : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
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
