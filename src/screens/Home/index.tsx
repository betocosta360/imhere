import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles'

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante existe', 'Ja existe um participante com esse nome')
    }
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
    
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Removido', ` Remover o ${name} ?`,
      [{ text: 'Sim', onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)) },
      { text: 'Cancelar', style: 'cancel' }])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 4 de junho de 2024</Text>

      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguem chegou no evento ainda? Adicione participantes a sua lista de presenças</Text>
        )}
      />



    </View>
  );
}

