import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { estilo } from './styles'

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({name, onRemove} : Props){
    return(
      <View style={estilo.container}>
        <Text style={estilo.name}>{name}</Text>
      
        <TouchableOpacity style={estilo.button} onPress={onRemove}>
          <Text style={estilo.buttonText}>-</Text>
        </TouchableOpacity>

      </View>
    );
}