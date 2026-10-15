function Projetos() {

  const projetos = [
    {
      numero: "01",
      categoria: "DESENVOLVIMENTO WEB",
      titulo: "Sistemas Web",
      descricao:
        "Desenvolvimento de aplicações completas utilizando React, Bootstrap, PHP e banco de dados.",
      tecnologias: ["React", "Bootstrap", "PHP", "MySQL"],
      destaque: true
    },

    {
      numero: "02",
      categoria: "DESENVOLVIMENTO MOBILE",
      titulo: "Aplicações Mobile",
      descricao:
        "Projetos para dispositivos móveis utilizando React Native, Expo e integração com serviços online.",
      tecnologias: ["React Native", "Expo", "JavaScript"],
      destaque: false
    },

    {
      numero: "03",
      categoria: "PESQUISA",
      titulo: "Simulação e Otimização",
      descricao:
        "Projetos de pesquisa envolvendo simulação computacional, otimização e apoio à tomada de decisão.",
      tecnologias: ["Simulação", "Otimização", "Python"],
      destaque: false
    },

    {
      numero: "04",
      categoria: "EDUCAÇÃO",
      titulo: "Projetos Acadêmicos",
      descricao:
        "Desenvolvimento e orientação de projetos práticos conectando conteúdo acadêmico com problemas reais.",
      tecnologias: ["Ensino", "Tecnologia", "Projetos"],
      destaque: false
    },

    {
      numero: "05",
      categoria: "BANCO DE DADOS",
      titulo: "Sistemas com Banco de Dados",
      descricao:
        "Modelagem e desenvolvimento de aplicações integradas a bancos de dados relacionais.",
      tecnologias: ["MySQL", "SQL", "PHP"],
      destaque: false
    },

    {
      numero: "06",
      categoria: "FRONT-END",
      titulo: "Interfaces Web",
      descricao:
        "Construção de interfaces responsivas e modernas utilizando tecnologias atuais de desenvolvimento web.",
      tecnologias: ["HTML", "CSS", "Bootstrap", "React"],
      destaque: false
    }
  ];


  return (
    <main>

      {/* HERO */}
      <section className="internal-hero">

        <div className="internal-circle internal-circle-one"></div>
        <div className="internal-circle internal-circle-two"></div>

        <div className="container">

          <div className="row align-items-center py-5">

            <div className="col-lg-8">

              <div className="hero-tag">
                <span></span>
                PROJETOS
              </div>

              <h1 className="internal-title">
                Ideias que se tornam
                <span> soluções.</span>
              </h1>

              <p className="internal-description">
                Projetos desenvolvidos nas áreas de tecnologia,
                educação, pesquisa e desenvolvimento de software.
              </p>

            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">

              <div className="project-hero-box">

                <span>
                  &lt;/&gt;
                </span>

                <strong>
                  Desenvolver.
                </strong>

                <strong>
                  Testar.
                </strong>

                <strong>
                  Evoluir.
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PROJETOS */}
      <section className="projects-section">

        <div className="container py-5">

          <div className="row align-items-end mb-5">

            <div className="col-lg-7">

              <span className="section-tag">
                PORTFÓLIO
              </span>

              <h2 className="section-title">
                Tecnologia aplicada
                <br />
                <span>na prática.</span>
              </h2>

            </div>

            <div className="col-lg-5">

              <p className="section-description">
                Uma seleção de áreas e projetos que representam
                minha atuação acadêmica e tecnológica.
              </p>

            </div>

          </div>


          <div className="row g-4">

            {projetos.map((projeto) => (

              <div
                className="col-md-6 col-lg-4"
                key={projeto.numero}
              >

                <div
                  className={
                    projeto.destaque
                      ? "project-card project-card-featured"
                      : "project-card"
                  }
                >

                  <div className="project-card-top">

                    <span className="project-number">
                      {projeto.numero}
                    </span>

                    <span className="project-category">
                      {projeto.categoria}
                    </span>

                  </div>


                  <h3>
                    {projeto.titulo}
                  </h3>

                  <p>
                    {projeto.descricao}
                  </p>


                  <div className="project-technologies">

                    {projeto.tecnologias.map((tecnologia) => (

                      <span key={tecnologia}>
                        {tecnologia}
                      </span>

                    ))}

                  </div>


                  <button className="project-button">
                    Ver projeto
                    <span>→</span>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="project-cta-section">

        <div className="container">

          <div className="project-cta">

            <div>

              <span>
                NOVOS PROJETOS
              </span>

              <h2>
                Tecnologia é construída
                experimentando.
              </h2>

              <p>
                Ensino e desenvolvimento caminham juntos quando
                transformamos conhecimento em projetos reais.
              </p>

            </div>


            <div className="cta-symbol">
              &lt;/&gt;
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projetos;