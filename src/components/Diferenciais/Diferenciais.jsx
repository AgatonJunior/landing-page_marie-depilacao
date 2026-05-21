import S from "./Diferenciais.module.scss";

import {
  LuLeaf,
  LuUserRound,
  LuSofa,
  LuShieldCheck,
  LuCalendarDays,
  LuSparkles,
} from "react-icons/lu";

const ITEMS = [
  {
    icon: <LuLeaf />,
    title: "Método menos agressivo",
    text: "Técnicas exclusivas desenvolvidas para minimizar o desconforto e proteger a saúde da sua pele.",
  },
  {
    icon: <LuUserRound />,
    title: "Atendimento personalizado",
    text: "Cada cliente é única. Analisamos seu tipo de pele e necessidade para o melhor resultado.",
  },
  {
    icon: <LuSofa />,
    title: "Ambiente confortável",
    text: "Um refúgio de tranquilidade projetado para que você relaxe durante todo o procedimento.",
  },
  {
    icon: <LuSparkles />,
    title: "Higiene e segurança",
    text: "Rigorosos protocolos de esterilização e materiais descartáveis para sua total segurança.",
  },
  {
    icon: <LuCalendarDays />,
    title: "Resultados duradouros",
    text: "Pele lisa por muito mais tempo, com enfraquecimento progressivo dos pelos.",
  },
  {
    icon: <LuShieldCheck />,
    title: "Produtos de qualidade premium",
    text: "Utilizamos as melhores ceras e cosméticos pós-depilatórios do mercado internacional.",
  },
];

export default function Diferenciais() {
  return (
    <section className={S.diferenciais} id="diferenciais">
      <div className={S.diferenciais__container}>
        
        <div className={S.diferenciais__heading}>
          <h2 className={S.diferenciais__title}>
            Diferenciais do Nosso Cuidado
          </h2>
        </div>

        <div className={S.diferenciais__grid}>
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className={S.diferenciais__card}
            >
              <div className={S.diferenciais__icon}>
                {item.icon}
              </div>

              <h3 className={S.diferenciais__cardTitle}>
                {item.title}
              </h3>

              <p className={S.diferenciais__text}>
                {item.text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}