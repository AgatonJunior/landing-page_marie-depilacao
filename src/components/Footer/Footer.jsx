import React from 'react';

import { motion } from 'framer-motion';

import {
  fadeUp,
  fadeLeft,
  fadeRight,
} from '../../animations/reveal';

import {
  LuInstagram,
  LuMessageCircle,
} from 'react-icons/lu';

import S from './Footer.module.scss';

const LINKS = [
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Service', to: '#' },
  { label: 'Instagram', to: 'https://www.instagram.com/mariepilacaoedesigner/' },
  { label: 'WhatsApp', to: 'https://wa.me/5521971432926' },
  { label: 'Contact', to: '/#contato' },
];

export default function Footer() {
  return (
    <footer className={S.footer}>

      <div className={S.container}>

        <div className={S.footer__grid}>

          <motion.div
            className={S.footer__brand}
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <h2 className={S.footer__logo}>
              Marie Depilação Designer
            </h2>

            <p className={S.footer__desc}>
              Professional Aesthetics & Design.
              Sua pele nas mãos de quem entende de cuidado.
            </p>

            <div className={S.footer__socials}>

              <a
                href="https://www.instagram.com/mariepilacaoedesigner/"
                target="_blank"
                rel="noreferrer"
                className={S.footer__social}
              >
                <LuInstagram />
              </a>

              <a
                href="https://wa.me/5521971432926"
                target="_blank"
                rel="noreferrer"
                className={S.footer__social}
              >
                <LuMessageCircle />
              </a>

            </div>
          </motion.div>

          <motion.div
            className={S.footer__col}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <p className={S.footer__title}>
              LINKS
            </p>

            <ul className={S.footer__links}>
              {LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.to}
                    className={S.footer__link}
                    target={
                      item.to.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={S.footer__col}
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <p className={S.footer__title}>
              CONTATO
            </p>

            <div className={S.footer__contact}>
              <p>
                Av. Belmiro Braga, 452 - Santa Lúcia,
                25271-430
              </p>

              <p>
                Seg - Sex: 09h às 18h
                <br />
                Sáb: 09h às 13h
              </p>
            </div>
          </motion.div>

        </div>

        <div className={S.footer__bottom}>
          <p>
            © 2024 Maria Depilação Designer.
            Professional Aesthetics & Design.
          </p>
        </div>

      </div>

    </footer>
  );
}