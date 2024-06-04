import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles'

export default function Home() {

  const participants = [
    'Participante 1',
    'Participante 2',
    'Participante 3',
    'Participante 4',
    'Participante 5',
    'Participante 6',
    'Participante 7',
    'Participante 8',
    'Participante 9',
    'Participante 10',
    'Participante 11',
    'Participante 12',
  ]
  function handleParticipantAdd() {
    console.log('Participant added')
  }

  function handleParticipantRemove(name: string) {
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

