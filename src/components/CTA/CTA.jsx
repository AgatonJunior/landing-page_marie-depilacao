import React from 'react';
import { motion } from 'framer-motion';

import S from './CTA.module.scss';

import {
  fadeUp,
  staggerContainer,
} from '../../animations/reveal';

export default function CTA() {
  return (
    <section className={S.cta} id="contato">
      <div className="container">
        <motion.div
          className={S.cta__box}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <motion.h2
            className={S.cta__title}
            variants={fadeUp}
          >
            Agende seu horário e cuide da sua autoestima
          </motion.h2>

          <motion.p
            className={S.cta__text}
            variants={fadeUp}
          >
            Prepare-se para viver uma experiência de cuidado única e transformadora.
          </motion.p>

          <motion.a
            href="https://wa.me/5521971432926"
            className={S.cta__btn}
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            💬 Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}