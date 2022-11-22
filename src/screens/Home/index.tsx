import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { estilo } from './styles'

import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert('Participante existe', 'Já existe um participante na lista');
    }
    
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('')
  }

  function handleParticipantRemove(name: string){

    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>  setParticipants(prevState => prevState.filter(participant => participant !== name))
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
      onChangeText={setParticipantName}
      value={participantName}
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
          onRemove={() => handleParticipantRemove(item)}
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