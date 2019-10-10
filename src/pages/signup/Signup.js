import React, { Component } from 'react';

export default class Signup extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            actualPage:1,
            info:[]
        }
    }

    handleChangePage = (page, data) => {
        const state = Object.assign({}, this.state);
        state.actualPage = page;

        state.info.push(data);

        this.setState(state);

    }
    
    handleActualPage = () => {
        switch(this.state.actualPage){
            case 1:
                return <step2 change={this.handleChangePage} />
            case 2:
                return <congrats change={this.handleChangePage} />
            default:
                return<step1 change={this.handleChangePage} />
         }
    }
    
    render() {
    console.log(this.state)
    return this.handlePage();    
    }
}
