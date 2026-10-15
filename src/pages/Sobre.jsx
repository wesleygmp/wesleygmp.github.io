function Sobre() {
  return (
    <main>

      {/* HERO SOBRE */}
      <section className="internal-hero">

        <div className="internal-circle internal-circle-one"></div>
        <div className="internal-circle internal-circle-two"></div>

        <div className="container">

          <div className="row align-items-center py-5">

            <div className="col-lg-7">

              <div className="hero-tag">
                <span></span>
                SOBRE MIM
              </div>

              <h1 className="internal-title">
                Educação, tecnologia
                <span> e transformação.</span>
              </h1>

              <p className="internal-description">
                Minha trajetória une ensino, desenvolvimento de software,
                pesquisa e tecnologia aplicada.
              </p>

            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">

              <div className="internal-highlight">

                <span className="highlight-number">
                  +10
                </span>

                <div>
                  <strong>
                    anos de experiência
                  </strong>

                  <p>
                    atuando com educação e tecnologia.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* APRESENTAÇÃO */}
      <section className="about-section">

        <div className="container py-5">

          <div className="row g-5 align-items-center">

            <div className="col-lg-7">

              <span className="section-tag">
                MINHA TRAJETÓRIA
              </span>

              <h2 className="section-title">
                Professor,
                <br />
                pesquisador e
                <span> desenvolvedor.</span>
              </h2>

              <p className="about-text mt-4">
                Sou professor universitário na área de Tecnologia da
                Informação, com experiência no ensino de programação,
                desenvolvimento web, desenvolvimento mobile, banco de dados
                e engenharia de software.
              </p>

              <p className="about-text">
                Minha formação acadêmica passa por Sistemas de Informação,
                Computação e Engenharia de Produção, permitindo integrar
                desenvolvimento tecnológico, educação e pesquisa aplicada.
              </p>

              <p className="about-text">
                Busco tornar o aprendizado mais próximo da realidade
                profissional, utilizando projetos práticos, desenvolvimento
                de sistemas e resolução de problemas reais.
              </p>

            </div>


            <div className="col-lg-5">

              <div className="about-feature-card">

                <div className="about-feature-number">
                  01
                </div>

                <div>
                  <span className="about-feature-label">
                    PRINCÍPIO
                  </span>

                  <h3>
                    Aprender fazendo.
                  </h3>

                  <p>
                    A tecnologia se torna mais significativa quando o aluno
                    consegue compreender, desenvolver, testar e transformar
                    uma ideia em uma solução.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FORMAÇÃO */}
      <section className="education-section">

        <div className="container py-5">

          <div className="row align-items-end mb-5">

            <div className="col-lg-7">

              <span className="section-tag">
                FORMAÇÃO
              </span>

              <h2 className="section-title">
                Conhecimento que conecta
                <br />
                <span>tecnologia e pesquisa.</span>
              </h2>

            </div>

            <div className="col-lg-5">

              <p className="section-description">
                Uma trajetória construída entre a Computação,
                a educação e a pesquisa científica.
              </p>

            </div>

          </div>


          <div className="row g-4">

            <div className="col-md-6 col-lg-3">

              <div className="education-card">

                <span className="education-index">
                  01
                </span>

                <h3>
                  Sistemas de Informação
                </h3>

                <p>
                  Formação voltada para desenvolvimento,
                  análise e gestão de sistemas.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="education-card">

                <span className="education-index orange-index">
                  02
                </span>

                <h3>
                  Computação
                </h3>

                <p>
                  Formação voltada também para educação,
                  tecnologia e prática docente.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="education-card destaque">

                <span className="education-index">
                  03
                </span>

                <h3>
                  Mestrado
                </h3>

                <p>
                  Pesquisa aplicada e desenvolvimento
                  científico na Engenharia de Produção.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="education-card">

                <span className="education-index orange-index">
                  04
                </span>

                <h3>
                  Doutorado
                </h3>

                <p>
                  Pesquisa envolvendo otimização,
                  simulação e tecnologia aplicada.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ÁREAS */}
      <section className="skills-section">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="section-tag">
              ÁREAS DE ATUAÇÃO
            </span>

            <h2 className="section-title">
              Tecnologias que fazem parte
              <br />
              <span>do meu dia a dia.</span>
            </h2>

          </div>


          <div className="skills-list">

            <span>React</span>
            <span>React Native</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Python</span>
            <span>Engenharia de Software</span>
            <span>Banco de Dados</span>
            <span>Simulação</span>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Sobre;