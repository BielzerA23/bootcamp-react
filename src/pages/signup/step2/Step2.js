import React, { Component } from 'react'

export defaul class step2 extends Component{

    constructor(props){
        super(props);
        this.state = {
          Email:'',
          passwd:'',
          cursorP:'',
          confirmPasswd:'',
          agree:false       
         }
      }

      handleChange = (event) =>{
        console.log(event.target.value)
        
        const state = Object.assign({}, this.state);
        
        let field = event.target.id;

        state[field] = event.target.value;

        this.setState(state);
    }

    isChecked = () => {
        this.setState(prevState => ({
            agree: !prevState.agree
        }));
    }

    render(){
        console.log(this.state);
        return(
            <div class="mainNoColor geral">

        <nav>
            <div id="logo"></div>
            <input type="text" placeholder="O que você está procurando" />
            <div id="signin">
                <a class="itensHovered" href="">Entrar</a>
            </div>
        </nav>

        <section id="formSection">

            <div class="header">
                <p>Você está em
                    Página incial/Abertura de conta</p>
                <p class="bold">Dados pessoais</p>
            </div>

            <div class="formContainer">
            <form onSubmit={() => this.props.change(2, this.state)}>
                    <label class="cursorP" for="email">Email</label>
                    <input onChange={(e) => this.handleChange(e)} id="email" type="text" placeholder="you@example.com.br" />
                    <label class="cursorP" for="passwd">Senha</label>
                    <input onChange={(e) => this.handleChange(e)} id="passwd" type="password" placeholder="***************" />
                    <label class="cursorP" for="confirmPasswd">Confirme a senha</label>
                    <input onChange={(e) => this.handleChange(e)} id="confirmPasswd" type="password" placeholder="***************" />
                    <div>
                        <button class="btnBlue" type="submit" href="#">Continuar</button>
                    </div>
                </form>
            </div>

        </section>

        <section id="infoContainer">
            <p>Beleza, agora defina como você irá </p>
            <p class="boldBlue">acessar</p>
            <p>sua conta.</p>
        </section>

    </div>






        )







    }







}