import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles'

export default function Home() {

  const [participants, setParticipants] = useState(['Participante 1']);
  
  function handleParticipantAdd() {
    if(participants.includes('Participante 12')) {
     return Alert.alert('Participante existe', 'Ja existe um participante com esse nome')
    }
    setParticipants(prevState => [...prevState, 'Participante 2'])
    console.log(participants)
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Removido', ` Remover o ${name} ?`, [{text: 'Sim',
     onPress: () => console.log(`Removido ${name}`)}, {text: 'Cancelar', style: 'cancel'}])
    console.log(`Você removeu o particpante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 4 de junho de 2024</Text>

      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
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

