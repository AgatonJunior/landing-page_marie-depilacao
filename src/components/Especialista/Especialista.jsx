import React from "react";

import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeRight,
} from "../../animations/reveal";

import S from "./Especialista.module.scss";

import Image from "../../assets/img-especialista.png";

export default function Especialista() {
  return (
    <section className={S.especialista} id="sobre">
      <div className={S.container}>
        <div className={S.especialista__inner}>

          <motion.div
            className={S.especialista__imageWrap}
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <img
              src={Image}
              alt="Produtos de estética"
              className={S.especialista__image}
            />
          </motion.div>

          <motion.div
            className={S.especialista__content}
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <span className={S.sectionLabel}>
              A ESPECIALISTA
            </span>

            <h2 className={S.especialista__title}>
              Paixão por transformar e cuidar
            </h2>

            <p className={S.especialista__text}>
              Meu objetivo é proporcionar uma experiência confortável, segura e
              acolhedora para cada cliente, valorizando autoestima, bem-estar e
              cuidado pessoal.
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

            <p className={S.especialista__signature}>
              Maria
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}