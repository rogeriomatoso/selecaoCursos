import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Produtos2 extends Component{
    render(){
        const {description, categoria, imagem} = this.props.data;
        return(
            <View style={styles.card}>
                <View styles={styles.header}>
                    <View styles={styles.areTitle}>
                        <Text style={styles.title}>
                            {description}
                        </Text>
                    </View>
                    <View style={styles.areaTag}>
                        <Text style={styles.tag}>
                            {categoria}
                        </Text>
                    </View>
                </View> 
                <Image 
                    source={{uri: imagem}}
                    style={styles.image}
                    resizeMode={'contain'} 
                 />      
                 <View style={styles.areaBtn}>
                     <TouchableOpacity style={styles.btn} onPress={()=> alert(description)}>
                         <Text style={styles.btnText}>VISUALIZAR</Text>
                    </TouchableOpacity>                     
                </View>       
            </View>
        )
    }
}
const styles = StyleSheet.create({
    card:{
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowOpacity: 5,
        borderRadius: 5,
        elevation: 3,
        padding: 20,
    },
    header:{
        marginBottom: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    areaTitle:{
        alignItems: 'flex-start',
    },
    title:{
        fontSize: 30,
        padding: 15,
        //fontWeight: 600,
    },
    areaTag:{
        alignItems: 'flex-end',
        marginTop: -40,
        marginBottom: 10
    },
    tag:{
        backgroundColor: '#83C300',
        color: '#FFF',
        padding: 5,
        width: 100,
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 12,
    },
    image:{
        height: 300,
        width: 500,
        margin: 10,

    },
    areaBtn:{
        alignItems: 'flex-end'
    },
    btn:{
        width:200,
        backgroundColor: '#3398F1',
        opacity: 1,
        padding: 8,
        borderRadius: 5,
    },
    btnText:{
        textAlign: 'center',
        color: '#FFF',
    }

   
  });