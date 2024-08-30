import React, { useState, useEffect } from "react";

function Signup() {
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    const selectElement = document.getElementById("inputState");
    setSelectedRole(selectElement.value);
  }, []);

  const handleSelectChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedRole === "Aluno") {
      window.location.href = "/alunocursos/home";
    } else if (selectedRole === "Professor") {
      window.location.href = "/professorcursos/home ";
    } else if (selectedRole === "Administrador") {
      window.location.href = "/cadastro-administrador";
    } else {
      alert("Por favor, selecione uma opção válida.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://i.postimg.cc/Y9WBqnkF/Sign-Up-Login.png"
              alt="loginimg"
              className="rounded shadow"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                marginLeft: "20px",
                marginBottom: "30px",
              }}
            ></img>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com*"
                />
                <label htmlFor="emailInput">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>

              <div className="mb-3">
                <label htmlFor="inputState" className="form-label">
                  Acessar como:
                </label>
                <select
                  id="inputState"
                  className="form-select"
                  onChange={handleSelectChange}
                  value={selectedRole}
                >
                  <option value="">...</option>
                  <option value="Aluno">Aluno</option>
                  <option value="Professor">Professor</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Li e estou de
                  acordo com as{" "}
                  <b>políticas da empresa e políticas de privacidade</b>.
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Login
              </button>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
