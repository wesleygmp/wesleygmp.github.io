function Contato() {

  function enviarFormulario(evento) {
    evento.preventDefault();

    alert("Mensagem enviada com sucesso!");
  }

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-8 col-lg-6">

          <div className="card shadow">

            <div className="card-body p-4">

              <h1 className="text-center mb-4">
                Contato
              </h1>

              <p className="text-center text-muted">
                Preencha o formulário abaixo para entrar em contato.
              </p>

              <form onSubmit={enviarFormulario}>

                <div className="mb-3">

                  <label className="form-label">
                    Nome
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu nome"
                    required
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    E-mail
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu e-mail"
                    required
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Assunto
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o assunto"
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Mensagem
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Digite sua mensagem"
                    required
                  ></textarea>

                </div>


                <div className="d-grid">

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                  >
                    Enviar mensagem
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contato;