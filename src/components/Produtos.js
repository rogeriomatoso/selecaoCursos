import React, {Component} from 'react';
import {View, Text} from  'react-native';

export default class Produtos extends Component{
    render(){
        return(
            <View>
                <Text>
                    {this.props.data.description}
                </Text>
            </View>
        )
    }
}