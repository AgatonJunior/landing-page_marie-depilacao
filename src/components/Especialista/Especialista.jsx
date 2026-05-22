import React from "react";
import S from "./Especialista.module.scss";
import Image from "../../assets/img-especialista.png";

export default function Especialista() {
  return (
    <section className={S.especialista} id="especialista">
      <div className={S.container}>
        <div className={S.especialista__inner}>
          <div className={S.especialista__imageWrap}>
            <img
              src={Image}
              alt="Produtos de estética"
              className={S.especialista__image}
            />
          </div>

          <div className={S.especialista__content}>
            <span className={S.sectionLabel}>A ESPECIALISTA</span>

            <h2 className={S.especialista__title}>
              Paixão por transformar e cuidar
            </h2>

            <p className={S.especialista__text}>
              Meu objetivo é proporcionar uma experiência confortável, segura e
              acolhedora para cada cliente, valorizando autoestima, bem-estar e
              cuidado pessoal. Acredito que a estética vai além do visual, é uma
              forma de carinho consigo mesma.
            </p>

            <ul className={S.especialista__features}>
              <li>
                <span className={S.especialista__check}>✓</span>
                8+ anos de experiência no mercado de estética
              </li>

              <li>
                <span className={S.especialista__check}>✓</span>
                Especialista em peles sensíveis e gestantes
              </li>
            </ul>

            <p className={S.especialista__signature}>Marie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
