import S from "./Hero.module.scss";
import { FaWhatsapp } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import Image from "../../assets/profissional-maria.jpg";

const Hero = () => {
  return (
    <section className={S.hero}>
      <div className={S.hero__container}>

        {/* LEFT */}
        <div className={S.hero__content}>
          <span className={S.hero__label}>
            Marie Depilação Designer
          </span>

          <h1 className={S.hero__title}>
            Pele lisa,
            <br />
            autoestima
            <br />
            elevada
            <br />
            e cuidado
            <br />
            profissional
          </h1>

          <p className={S.hero__description}>
            Especialista em depilação feminina com atendimento
            humanizado, conforto e resultados incríveis.
          </p>

          <div className={S.hero__buttons}>
            <a
              href="https://wa.me/5521971432926"
              target="_blank"
              rel="noreferrer"
              className={S.hero__primary}
            >
              <FaWhatsapp />
              Agendar pelo WhatsApp
            </a>

            <a href="#servicos" className={S.hero__secondary}>
              Ver Serviços
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={S.hero__imageWrapper}>
          <img
            src={Image}
            alt="Maria depiladora"
            className={S.hero__image}
          />

          <div className={S.hero__badge}>
            <div className={S.hero__badgeIcon}>
              <LuBadgeCheck />
            </div>

            <div>
              <strong>Especialista Certificada</strong>
              <span>Estética & Skin Care</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;