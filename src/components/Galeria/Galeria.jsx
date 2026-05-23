import React from "react";

import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "../../animations/reveal";

import S from "./Galeria.module.scss";

import img01 from "../../assets/espaço01.jpg";
import img02 from "../../assets/espaço02.jpg";
import img03 from "../../assets/espaço03.jpg";

const IMAGES = [
  { src: img01, alt: "Sala de atendimento", size: "large" },
  { src: img02, alt: "Sala recepção", size: "small" },
  { src: img03, alt: "Prateleira produtos", size: "small" },
];

export default function Galeria() {
  return (
    <section className={S.galeria__section} id="galeria">
      <div className={S.container}>

        <span className={S.section__label}>
          Galeria
        </span>

        <h2 className={S.section__title}>
          Nosso Espaço & Resultados
        </h2>

        <motion.div
          className={S.galeria__grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {IMAGES.map((img) => (
            <motion.div
              key={img.alt}
              variants={fadeUp}
              className={
                img.size === "large"
                  ? S.galeria__item__large
                  : S.galeria__item__small
              }
            >
              <img
                src={img.src}
                alt={img.alt}
                className={S.galeria__img}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}