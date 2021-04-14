import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default class Entrar extends Component{
    render(){
        return(
           
            <View style={{ backgroundColor: '#292929', width: '100%', height: 300, borderRadius: 15, padding:20 }}>
                <Text style={{ color: '#FFF', fontSize: 28, textAlign:'center', marginBottom:15 }}>
                    Informações sobre o Aplicativo
                </Text>
                <Text style={{ fontSize: 15, color: '#FFF', textAlign:'center', marginBottom:15 }}>Loren Ipsun</Text>
                <Button title='Sair' onPress={this.props.fechar} />
            </View>  
            
        )
    }
}