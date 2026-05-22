import React from "react";
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
        <span className={S.section__label}>Galeria</span>
        <h2 className={S.section__title}>Nosso Espaço &amp; Resultados</h2>

        <div className={S.galeria__grid}>
          {IMAGES.map((img) => (
            <div
              key={img.alt}
              className={img.size === 'large' ? S.galeria__item__large : S.galeria__item__small}
            >
              <img src={img.src} alt={img.alt} className={S.galeria__img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}