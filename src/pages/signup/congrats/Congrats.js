import React, { Component } from 'react'


export default class Congrats extends Component {
    render() {
        return (
            <div class="geral mainBackground">
            <nav>
                <div id="logo"></div>
                <input type="text" placeholder="O que você está procurando" />
                <div id="signin">
                    <a class="itensHovered" href="">Entrar</a>
                </div>
            </nav>
            <section>
                <span>Parabéns Diego, sua conta está pronta para uso.</span>
                <button class="itensHovered btnOutline btnDefault">Voltar</button>
            </section>
        </div>
        )
    }
}
