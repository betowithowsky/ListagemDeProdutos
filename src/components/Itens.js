import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Button
} from 'react-native';

export default class Itens extends Component {


    render() {
        return (
            <View style={styles.item}>
                <View style={styles.foto}>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
                </View>

                <View style={styles.detalhes}>
                <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
                <Text style={styles.txtValor}>R$: {this.props.item.valor}</Text>
                <Text style={styles.txtDetalhes}>Local: {this.props.item.local_anuncio}</Text>
                <Text style={styles.txtDetalhes} >Data: {this.props.item.data_publicacao}</Text>
                <Button title='Compar' />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
    },
    foto: {
        width: 102,
        height: 102
    },
    detalhes: {
        flex: 1,
        marginLeft: 20,
    },
    txtTitulo: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    txtValor: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtDetalhes: {
        fontSize: 14,
    }
});
