import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import api from './src/services/api';
import Produtos from './src/components/Produtos';


export default class App extends Component{ 
  constructor(props){
    super(props);
    this.state ={ 
      produtos : []
    };
    
  } 
 async componentDidMount(){
     const response = await api.get('itens')
      this.setState({ produtos: response.data})
     
  }
    
  render(){   

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>       
          <FlatList
            data={this.state.produtos}
            keyExtractor={item=> item.id.toString()}
            renderItem={({item})=> <Produtos description={item.description} 
                                    imagem={item.imagem} largura={100} altura={100}
                                    categoria={item.categoria}/>}          
          />       
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
   justifyContent: 'center',
   backgroundColor:'#CBCDCA'
  },
 
});
