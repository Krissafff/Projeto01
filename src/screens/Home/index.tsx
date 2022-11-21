import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { estilo } from './styles'

import { Participant } from '../../components/Participant';

export default function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João'];

  function handleParticipantAdd(){
    if(participants.includes('Rodrigo')){
      return Alert.alert('Participante existe', 'Já existe um participante na lista');
    }
    console.log('Você clicou no botão de Adicionar!');
  }

  function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.eventName}>Nome do evento</Text>
      <Text style={estilo.eventDate}>Sexta, 21 de Novembro de 2022.</Text>
    
    <View style={estilo.form}>
      <TextInput 
      style={estilo.input} 
      placeholder="Nome do participante"
      placeholderTextColor="#6B6B6B"
      keyboardType='email-address'
      />

      <TouchableOpacity style={estilo.button} onPress={handleParticipantAdd}>
        <Text style={estilo.buttonText}>+</Text>
      </TouchableOpacity>
    </View>

    <FlatList 
      data={participants}
      keyExtractor={item => item}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
          <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove("Rodrigo")}
          />
      )}
      ListEmptyComponent={() => (
        <Text style={estilo.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presenças.
        </Text>
      )}
    />

    </View>
  )
}