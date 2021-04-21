import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from  'react-native';

export default class Produtos extends Component{   
    render(){
        const color = this.props.categoria === 'Não Perecível' ? '#C9F1FD' : '#ffa500';
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={{uri: this.props.imagem}}
                        style={{width: this.props.largura, height: this.props.altura}}
                        //resizeMode={'contain'}
                    />
                </View>
                <View style={{marginHorizontal: 10}}></View>
                <View style={styles.card}>
                    <Text style={styles.textCard}>
                        {this.props.description}
                    </Text>
                    <Text style={styles.textCategoria, {backgroundColor: color}}>
                        {this.props.categoria}
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor:'#BDECB6',
    },
    card:{              
        padding: 20
    },
    textCard:{
        flexDirection: 'column',        
        fontSize: 28, 
        fontFamily: 'arial',
        marginBottom: 50,
    },
    textCategoria:{        
        padding: 5,
        borderRadius: 5,
       // width: 100, 
       // height: 20,         
        textAlign: 'center',        
    }

})