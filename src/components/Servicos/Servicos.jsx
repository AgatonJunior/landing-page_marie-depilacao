import React from 'react';
import S from './Servicos.module.scss';

const SERVICOS = [
  {
    title: 'Depilação na cera',
    text: 'Remoção eficiente e duradoura com cera de alta qualidade.',
  },
  {
    title: 'Axila',
    text: 'Técnica especializada para pele sensível da região axilar.',
  },
  {
    title: 'Buço',
    text: 'Tratamento delicado para a região do lábio superior.',
  },
  {
    title: 'Design de Sobrancelhas',
    text: 'Modelagem profissional para realçar a beleza do seu olhar.',
  },
  {
    title: 'Hidraglos',
    text: 'Lábios mais hidratados e nutridos e com brilho',
  },
  {
    title: 'Extensão de Cílios',
    text: 'Mais volume, curvatura e definição para o seu olhar',
  },
  {
    title: 'Banho de Lua',
    text: 'Clareia, hidrata e uniformiza a pele',
  },
  {
    title: 'Virilha',
    text: 'Atendimento especializado com protocolo exclusivo.',
  },
  {
    title: 'Tratamento de Folículo',
    text: 'Cuidado profundo para folículos sensibilizados.',
  },
  {
    title: 'Pernas Completas',
    text: 'Depilação completa das pernas com resultado suave.',
  },
];

export default function Servicos() {
  return (
    <section className={S.servicos} id='serviços'>
      <div className={S.container}>

        <div className={S.servicos__header}>

          <div>
            <span className={S.sectionLabel}>
              MENU DE SERVIÇOS
            </span>

            <h2 className={S.sectionTitle}>
              Cuidados que você merece
            </h2>
          </div>

          <p className={S.servicos__subtitle}>
            Explore nossa seleção de tratamentos premium
            projetados para realçar sua beleza natural.
          </p>

        </div>

        <div className={S.servicos__grid}>
          {SERVICOS.map((item) => (
            <article
              key={item.title}
              className={S.servicos__card}
            >
              <h3 className={S.servicos__cardTitle}>
                {item.title}
              </h3>

              <p className={S.servicos__cardText}>
                {item.text}
              </p>

              <a
                href="https://wa.me/5521971432926"
                className={S.servicos__cardLink}
              >
                AGENDAR
                <span>→</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}