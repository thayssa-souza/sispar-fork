import { useState } from "react";
import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Salvar from "../../assets/Solicitacao/+.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Check from "../../assets/Solicitacao/check.png"
import Cancelar from "../../assets/Solicitacao/x.png"

function Solicitacao() {
  const [dadosReembolso, setDadosReembolso] = useState({
    colaborador: "",
    empresa: "",
    nPrestacao: "",
    descricao: "",
    data: "",
    motivo: "",
    tipoReembolso: "",
    centroCusto: "",
    ordemInterna: "",
    divisao: "",
    pep: "",
    moeda: "",
    distanciaKm: "",
    valorKm: "",
    valorFaturado: "",
    despesa: "",
  });

  const [dados, setDados] = useState([]);

  const handleChange = (e) => {
    setDadosReembolso({ ...dadosReembolso, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDados([...dados, dadosReembolso]);
    console.log(dadosReembolso);
    setDadosReembolso({
      colaborador: "",
      empresa: "",
      nPrestacao: "",
      descricao: "",
      data: "",
      motivo: "",
      tipoReembolso: "",
      centroCusto: "",
      ordemInterna: "",
      divisao: "",
      pep: "",
      moeda: "",
      distanciaKm: "",
      valorKm: "",
      valorFaturado: "",
      despesa: "",
    });
  };

  const handleDelete = (event, index) => {
    event.preventDefault();
    event.stopPropagation(); // Impede propagação do clique para elementos pais
    const updatedDados = dados.filter((_, i) => i !== index);
    setDados(updatedDados);
  };

  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor da casinha" />
          <img src={Seta} alt="Vetor da setinha" />
          <p> Reembolsos</p>
          <img src={Seta} alt="Vetor da setinha" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form onSubmit={handleSubmit} className={styles.formMain}>
            <div className={styles.formGrupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="nome"> Nome Completo</label>
                <input
                  value={dadosReembolso.colaborador}
                  name="colaborador"
                  onChange={handleChange}
                  type="text"
                  id="nome-completo"
                />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="empresa">Empresa</label>
                <input
                  name="empresa"
                  value={dadosReembolso.empresa}
                  onChange={handleChange}
                  type="text"
                />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="prestacao"> Nº Prest. Contas</label>
                <input
                  value={dadosReembolso.nPrestacao}
                  onChange={handleChange}
                  type="number"
                  name="nPrestacao"
                  id=""
                />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="motivo">Descrição / Motivo do Reembolso</label>

                <textarea
                  name="descricao"
                  value={dadosReembolso.descricao}
                  onChange={handleChange}
                  minLength="10"
                  maxLength="30"
                />
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.formGrupo2}>
              <div className={styles.inputData}>
                <label htmlFor="date"> Data</label>
                <input
                  value={dadosReembolso.data}
                  onChange={handleChange}
                  type="date"
                  name="data"
                  id="data"
                />
              </div>

              <div className={styles.selectDespesas}>
                <label htmlFor="tipoReembolso"> Tipo de Despesa </label>

                <select
                  value={dadosReembolso.tipoReembolso}
                  name="tipoReembolso"
                  onChange={handleChange}
                  id="tipoReembolso"
                >
                  <option value="selecionar">Selecionar</option>
                  <option value="alimentacao">Alimentação</option>
                  <option value="combustivel">Combustível</option>
                  <option value="conducao">Condução</option>
                  <option value="estacionamento">Estacionamento</option>
                  <option value="viagem adm">Viagem admin.</option>
                  <option value="viagem oper"> Viagem operacional</option>
                  <option value="eventos">Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="custo">Centro de Custo</label>
                <select
                  value={dadosReembolso.centroCusto}
                  onChange={handleChange}
                  name="centroCusto"
                  id="centroCusto"
                >
                  <option value="">Selecionar</option>

                  <option value="FIN CONTROLES INTERNOS MTZ">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="FIN CONTABILIDADE MTZ">
                    1100110101 - FIN CONTABILIDADE MTZ
                  </option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor="ordemInterna">Ord. Int.</label>
                <input
                  value={dadosReembolso.ordemInterna}
                  name="ordemInterna"
                  onChange={handleChange}
                  id="ordemInterna"
                  type="text"
                />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="divisao">Div.</label>
                <input
                  type="text"
                  id="divisao"
                  onChange={handleChange}
                  name="divisao"
                  value={dadosReembolso.divisao}
                />
              </div>

              <div className={styles.pep}>
                <label htmlFor="pep">PEP</label>
                <input
                  value={dadosReembolso.pep}
                  onChange={handleChange}
                  name="pep"
                  id="PEP"
                  type="text"
                />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="moeda">Moeda</label>
                <select
                  value={dadosReembolso.moeda}
                  onChange={handleChange}
                  name="moeda"
                  id="coents"
                >
                  <option value=""></option>
                  <option value="brl">BRL</option>
                  <option value="ars">ARS</option>
                  <option value="usd">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="distancia">Dist. / Km</label>
                <input
                  value={dadosReembolso.distanciaKm}
                  name="distanciaKm"
                  onChange={handleChange}
                  id="distance-input"
                  type="text"
                />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="valor">Valor / Km</label>
                <input
                  value={dadosReembolso.valorKm}
                  onChange={handleChange}
                  name="valorKm"
                  id="value-km"
                  type="text"
                />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="faturado"> Val. Faturado </label>
                <input
                  type="text"
                  id="valorFaturado"
                  name="valorFaturado"
                  value={dadosReembolso.valorFaturado}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="taxa"> Despesa </label>
                <input
                  type="text"
                  id="despesa"
                  name="despesa"
                  value={dadosReembolso.despesa}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.botoes}>
                <button className={styles.salvar} type="submit">
                  <img src={Salvar} alt="" /> Salvar
                </button>

                <button
                  className={styles.deletar}
                  type="button"
                  onClick={() => handleDelete()}
                >
                  <img src={Deletar} alt="" />
                </button>
              </div>
            </div>
          </form>

          {/* table é a tag principal que vai definir a tabela */}
          {/* thead é a tag que agrupa o cabeçalho */}
          {/* tr é a linha da tabela */}
          {/* th título da tabela, um para cada título, ex: nome - idade - estado */}
          {/* tbody agrupa o corpo da tabela (os dados que será recebido) */}

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              {dados.map((item, index) => (
                <tr key={index}>
                  <td>
                    <button onClick={(e) => handleDelete(e, index)}>
                      <img
                        className={styles.lixeira}
                        src={Lixeira}
                        alt="Deletar"
                      />
                    </button>
                  </td>
                  <td>{item.colaborador}</td>
                  <td>{item.empresa}</td>
                  <td>{item.nPrestacao}</td>
                  <td>{item.data}</td>

                  <td>
                    <button>
                      <img src={Motivo} alt="Motivo" />
                    </button>
                  </td>

                  {/* <td>{item.descricao}</td> */}

                  <td>{item.tipoReembolso}</td>
                  <td>{item.centroCusto}</td>
                  <td>{item.ordemInterna}</td>
                  <td>{item.divisao}</td>
                  <td>{item.pep}</td>
                  <td>{item.moeda}</td>
                  <td>{item.distanciaKm}</td>
                  <td>{item.valorKm}</td>
                  <td>{item.valorFaturado}</td>
                  <td>{item.despesa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        <footer className={styles.footerSolicitacao}>
          <section>
            <div className={styles.inputFooter}>
              <label> Total Faturado </label>
              <input placeholder="0,00" />
            </div>

            <div>
              <label> Total Despesa </label>
              <input placeholder="0,00" />
            </div>

            <div className={styles.boxButtonFooter}>
              <button className={styles.buttonAnalise}>
                {" "}
                <img src={Check} alt="" /> Enviar para Análise{" "}
              </button>

              <button className={styles.buttonCancelar}>
                {" "}
                <img src={Cancelar} alt="" /> Cancelar Solicitação{" "}
              </button>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
export default Solicitacao;
