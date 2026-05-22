import React, { useState, useEffect } from "react";
import S from "./Comentarios.module.scss";

const STARS = [1, 2, 3, 4, 5];

export default function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");
  const [estrelas, setEstrelas] = useState(5);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const salvo = localStorage.getItem("comentarios");
    if (salvo) setComentarios(JSON.parse(salvo));
  }, []);

  function salvar(lista) {
    setComentarios(lista);
    localStorage.setItem("comentarios", JSON.stringify(lista));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim() || !texto.trim()) return;
    const novo = {
      id: Date.now(),
      nome,
      texto,
      estrelas,
      data: new Date().toLocaleDateString("pt-BR"),
    };
    salvar([novo, ...comentarios]);
    setNome("");
    setTexto("");
    setEstrelas(5);
  }

  return (
    <section className={S.comentarios} id="comentarios">
      <div className={S.container}>
        
        <div className={S.comentarios__header}>
          <span className={S.label}>Depoimentos</span>
          <h2 className={S.title}>O que nossas clientes dizem</h2>
          <p className={S.subtitle}>
            A satisfação de quem confia no meu trabalho é a minha maior
            recompensa.
          </p>
        </div>

        <form className={S.form} onSubmit={handleSubmit}>
          <div className={S.form__row}>
            <input
              className={S.input}
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              maxLength={50}
            />
            <div className={S.stars__select}>
              {STARS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={(hover ?? estrelas) >= s ? S.star__active : S.star}
                  onMouseEnter={() => setHover(s)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setEstrelas(s)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <textarea
            className={S.textarea}
            placeholder="Escreva seu comentário..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            rows={3}
            maxLength={300}
          />
          <button className={S.btn} type="submit">
            Enviar comentário
          </button>
        </form>

        {comentarios.length === 0 ? (
          <p className={S.empty}>Nenhum comentário ainda. Seja o primeira!</p>
        ) : (
          <div className={S.comentarios__grid}>
            {comentarios.map((c) => (
              <div key={c.id} className={S.comentarios__card}>
                <div className={S.comentarios__stars}>
                  {"★".repeat(c.estrelas)}
                  {"☆".repeat(5 - c.estrelas)}
                </div>
                <p className={S.comentarios__text}>"{c.texto}"</p>
                <span className={S.comentarios__name}>{c.nome}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
