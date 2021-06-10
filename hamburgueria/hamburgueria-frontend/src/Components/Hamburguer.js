import axios from "axios";
import React from "react";

class HamburguerBody extends React.Component {

    state = {
        hamburguerAtual: {
            nome: "",
            validade: "",
            preco: ""
        },

        lista: [
        ],
    }

    inputChange(campo, novoTexto) {
        const novoState = { ...this.state };
        novoState.hamburguerAtual[campo] = novoTexto;
        this.setState(novoState);
    }

    adicionar() {
        const apiUrl = `http://localhost:8080/hamburguer/add`;
        axios.post(apiUrl, this.state.hamburguerAtual)
            .then(
                (response) => {
                    console.log(response.body);
                    this.carregarHamburguers();
                    this.inputChange('nome', "");
                    this.inputChange('validade', "");
                    this.inputChange('preco', "");
                })
            .catch((err) => {
                console.log(err);
            });
    }

    carregarHamburguers() {
        const opts = {
            responseType: 'json'
        }
        axios.get(`http://localhost:8080/hamburguer/find/${this.state.hamburguerAtual.nome}`, opts)
            .then(
                (response) => {
                    const novoState = { ...this.state };
                    novoState.lista = response.data;
                    this.setState(novoState);
                })
            .catch((err) => {
                console.log(err);
            });
        console.log("Hamburguers carregados com sucesso!");
    }

    render() {
        const displayLista = [];

        for (let i = 0; i < this.state.lista.length; i++) {
            displayLista.push(
                <tr key={i}>
                    <td>{this.state.lista[i].nome}</td>
                    <td>{this.state.lista[i].validade}</td>
                    <td>R${this.state.lista[i].preco}</td>
                </tr>);
        }

        return (
            <div>
                <section className="intro-signin">
                    <div className="container-fluid">
                        <div className="card card-signin">
                            <h5>Hamburgueria</h5>
                            <h4>Cardápio</h4>
                            <div className="card-body">
                                <div>
                                    <div className="form-label-group">
                                        <input type="TEXT" value={this.state.hamburguerAtual.nome}
                                            className="form-control"
                                            onChange={(novoTexto) => { this.inputChange('nome', novoTexto.target.value) }}
                                            id="nomeHamburguer"
                                            name="nomeHamburguer"
                                            required placeholder=" " />
                                        <label for="nomeHamburguer">Nome</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="TEXT" value={this.state.hamburguerAtual.validade}
                                            className="form-control"
                                            onChange={(novoTexto) => { this.inputChange('validade', novoTexto.target.value) }}
                                            id="validadeHamburguer"
                                            name="validadeHamburguer"
                                            required placeholder=" " />
                                        <label for="validadeHamburguer">Validade</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="number" value={this.state.hamburguerAtual.preco}
                                            className="form-control"
                                            onChange={(novoTexto) => { this.inputChange('preco', novoTexto.target.value) }}
                                            id="precoHamburguer"
                                            name="precoHamburguer"
                                            required placeholder=" " />
                                        <label for="precoHamburguer">Preço</label>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => { this.adicionar() }}>Adicionar</button>
                                    <button className="btn btn-primary" onClick={() => { this.carregarHamburguers() }}>Pesquisar</button>
                                </div>

                                <h5>Hamburguers</h5>
                                <div align="center">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Validade</th>
                                                <th>Preço</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayLista}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HamburguerBody;
