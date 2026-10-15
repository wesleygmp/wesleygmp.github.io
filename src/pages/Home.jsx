import { Link } from "react-router-dom";
import professor from "../assets/professor.png";

function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">

        <div className="hero-circle hero-circle-one"></div>
        <div className="hero-circle hero-circle-two"></div>

        <div className="container">

          <div className="row align-items-center hero-content">

            {/* TEXTO */}
            <div className="col-lg-6">

              <div className="hero-tag">
                <span></span>
                Professor • Tecnologia • Pesquisa
              </div>

              <h1 className="hero-title">

                Tecnologia para

                <span className="text-cyan">
                  ensinar,
                </span>

                <span className="text-orange">
                  criar
                </span>

                e transformar.

              </h1>

              <p className="hero-description">
                Sou Wesley Gabriel, professor universitário na área
                de Tecnologia da Informação. Trabalho com programação,
                desenvolvimento de software, pesquisa e formação de
                novos profissionais.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/projetos"
                  className="btn btn-cyan"
                >
                  Conhecer projetos
                  <span>→</span>
                </Link>

                <Link
                  to="/sobre"
                  className="btn btn-outline-custom"
                >
                  Conheça minha trajetória
                </Link>

              </div>


              <div className="hero-features">

                <div className="feature">

                  <div className="feature-number">
                    01
                  </div>

                  <div>
                    <strong>Ensino</strong>
                    <small>
                      Tecnologia na prática
                    </small>
                  </div>

                </div>


                <div className="feature">

                  <div className="feature-number orange">
                    02
                  </div>

                  <div>
                    <strong>Pesquisa</strong>
                    <small>
                      Inovação aplicada
                    </small>
                  </div>

                </div>


                <div className="feature">

                  <div className="feature-number">
                    03
                  </div>

                  <div>
                    <strong>Projetos</strong>
                    <small>
                      Soluções reais
                    </small>
                  </div>

                </div>

              </div>

            </div>


            {/* FOTO */}
            <div className="col-lg-6 mt-5 mt-lg-0">

              <div className="hero-photo-area">

                <div className="photo-shape-orange"></div>
                <div className="photo-shape-cyan"></div>

                <div className="photo-container">

                  <img
                    src={professor}
                    alt="Professor Wesley Gabriel"
                    className="professor-photo"
                  />

                </div>


                <div className="photo-card card-top">

                  <div className="photo-card-icon">
                    &lt;/&gt;
                  </div>

                  <div>
                    <strong>
                      Desenvolvimento
                    </strong>

                    <span>
                      Web & Mobile
                    </span>
                  </div>

                </div>


                <div className="photo-card card-bottom">

                  <div className="photo-card-icon orange-icon">
                    🎓
                  </div>

                  <div>
                    <strong>
                      Docência
                    </strong>

                    <span>
                      Educação & Tecnologia
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ÁREAS */}
      <section className="atuacao-section">

        <div className="container py-5">

          <div className="row align-items-end mb-5">

            <div className="col-lg-7">

              <span className="section-tag">
                O QUE EU FAÇO
              </span>

              <h2 className="section-title">
                Ensino, tecnologia
                <br />
                <span>e inovação.</span>
              </h2>

            </div>

            <div className="col-lg-5">

              <p className="section-description">
                Integro conhecimento acadêmico e tecnologia
                para construir experiências de aprendizagem
                e soluções digitais.
              </p>

            </div>

          </div>


          <div className="row g-4">


            <div className="col-md-4">

              <div className="area-card">

                <div className="area-icon">
                  01
                </div>

                <h3>
                  Ensino
                </h3>

                <p>
                  Programação, desenvolvimento web,
                  desenvolvimento mobile e engenharia
                  de software.
                </p>

                <span className="card-detail">
                  EDUCAÇÃO
                </span>

              </div>

            </div>


            <div className="col-md-4">

              <div className="area-card destaque">

                <div className="area-icon">
                  02
                </div>

                <h3>
                  Pesquisa
                </h3>

                <p>
                  Pesquisa aplicada envolvendo simulação,
                  otimização, computação e novas
                  tecnologias.
                </p>

                <span className="card-detail">
                  INOVAÇÃO
                </span>

              </div>

            </div>


            <div className="col-md-4">

              <div className="area-card">

                <div className="area-icon orange">
                  03
                </div>

                <h3>
                  Projetos
                </h3>

                <p>
                  Desenvolvimento de aplicações, sistemas
                  e projetos tecnológicos conectados com
                  problemas reais.
                </p>

                <span className="card-detail orange-text">
                  DESENVOLVIMENTO
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;