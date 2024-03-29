import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);

        this.state = { listaItens: [] };
    }

    componentWillMount() {
        //requisição HTTP - solicitação a algun recurso na internet
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html').then(response => { this.setState({ listaItens: response.data }); }).catch(() => { console.log('Erro ao recuperar os dados'); });
    }

    render() {
        return (
            <ScrollView style={{backgroundColor : '#ddd'}}>
                {this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
            </ScrollView>

        );
    }
}
