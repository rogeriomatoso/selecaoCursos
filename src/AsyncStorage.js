import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component{ 
  constructor(props){
    super(props);
    this.state ={ 
      input: '',
      nome: 'Rogerio'
    };
    this.gravaNome = this.gravaNome.bind(this);
  }

   async componentDidMount(){
     await AsyncStorage.getItem('nome').then((value) => {
        this.setState({nome: value});
     })
   }


  async componentDidUpdate(_, prevState){
     const nome = this.state.nome;
     if(prevState !== nome){
        await AsyncStorage.setItem('nome', nome);
     }
   }

  gravaNome(){
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso');
    Keyboard.dismiss();
  }

  render(){   

    return (
      <View style={styles.container}> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
            underlineColorAndroid='transparent'
          />
           <TouchableOpacity onPress={this.gravaNome}>
             <Text style={styles.btnEntrar}>+</Text>
          </TouchableOpacity> 
       </View>
        <View>
          <Text style={styles.name}>{this.state.nome}</Text>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    marginTop: 20,
  },

  inputView:{
    flexDirection: 'row',
    alignItems: 'center' ,
  },

  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  btnEntrar:{
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  name:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
  },

 
});
