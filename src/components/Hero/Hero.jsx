import S from "./Hero.module.scss";
import { FaWhatsapp , } from "react-icons/fa";
import { LuCircleCheckBig } from "react-icons/lu";
import Image from '../../assets/profissional-maria.jpg';


const Hero = () => {
  return (
    <section className={S.hero}>
      <div className={S.hero__inner}>
        <div className={S.hero__content}>
          <span className={S.section__label}>
            Marie Depilação Designer
          </span>
        </div>
        <h1 className={S.hero__title}>
          Pele lisa,<br />
          autoestima elevada<br />
          e cuidado<br />
          profissional
        </h1>
        <p className={S.hero__text}>
          Especialista em depilação feminina com atendimento humanizado,
          conforto e resultados incríveis para sua pele.
        </p>
        <div className={S.hero__actions}>

          <a href="https://wa.me/5521971432926"
            className={S.hero__btn}
            target="_blank"
            rel="noreferrer">
            <FaWhatsapp /> Agendar pelo WhatsApp
          </a>
          <a href="#servicos" className={S.hero__btn}>
            Ver Serviços
          </a>
      </div>
        </div>
        <div className={S.hero__visual}>
          <div className={S.hero__image_wrap}>
            <img
              src={Image}
              alt="Marie - Depiladora profissional"
              className={S.hero__image}
            />
          </div>
          <div className={S.hero__certification}>
            <div className={S.hero__certification_icon}>
              <LuCircleCheckBig size={24} />
            </div>
            <div className={S.hero__certification_text}>
              <p className={S.hero__certification_title}>
                Especialista Certificada
              </p>
              <p className={S.hero__certification_subtitle}>
                Aesthetics & Skin Care
              </p>
            </div>
          </div>
          <div className={S.hero__blob} aria-hidden="true" />
        </div>
    </section>
  );
};

export default Hero;