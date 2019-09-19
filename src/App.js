import React,{Component} from "react";
import Componente2 from "./Componente2";


export default class App extends Component{
  render(){
    return (
      <>
      <h1>Hello world!!!</h1>
      <h2>olá mundo</h2>
      <Componente2 nome="Gabriel"/>
      <Componente2 idade="18"/>
      </>
      )
  }

}