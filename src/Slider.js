//Qdo necessario carreg em App.js

import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component{ 
  constructor(props){
    super(props);
    this.state ={ 
      valor:  0
    };
  }
  render(){   

    return (
      <SafeAreaView style={styles.container}> 
        <Slider
          minimumVAalue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado)=> this.setState({valor: valorSelecionado})}
          value={this.state.valor}
        />
        <Text style={{fontSize: 30, textAlign: 'center'}}>Voce Está pesando {this.state.valor.toFixed(2)} Kg</Text>       
   
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
  },
 
})
