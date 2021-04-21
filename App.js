import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, ActivityIndicator} from 'react-native';
import api from './src/services/api';
import Produtos2 from './src/components/Produtos2';


export default class App extends Component{ 
  constructor(props){
    super(props);
    this.state ={ 
      produtos : [],
      loading: true
    };
    
  } 
 async componentDidMount(){
     const response = await api.get('itens')
      this.setState({ produtos: response.data, loading: false})
     
  }
    
  render(){   
    if(this.state.loading ){
      return(
        <View style={{alignItems: 'center', justifyContent:'center', flex: 1}}>
          <ActivityIndicator color='#3398F1' size={40}/>
        </View>
      )
    }else{
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>       
            <FlatList
              data={this.state.produtos}
              keyExtractor={item=> item.id.toString()}
              renderItem={({item})=> <Produtos2 data={item}/>}          
            />       
          </View>
          </ScrollView>
      );
    }
   
    
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
