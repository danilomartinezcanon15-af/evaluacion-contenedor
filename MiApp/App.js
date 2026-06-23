import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { SpaceMono_400Regular } from '@expo-google-fonts/space-mono';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from 'react';
import MotoCard from './components/MotoCard';
import DetalleScreen from './screens/DetalleScreen';
import motos from './data/motos.json';

export default function App() {
  const [motoSeleccionada, setMotoSeleccionada] = useState(null);

  const [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  if (motoSeleccionada) {
    return (
      <DetalleScreen
        moto={motoSeleccionada}
        onVolver={() => setMotoSeleccionada(null)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>🏍 Concesionario</Text>
      <FlatList
        data={motos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MotoCard moto={item} onPress={setMotoSeleccionada} />
        )}
        contentContainerStyle={styles.lista}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 16,
  },
  titulo: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 26,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  lista: {
    paddingBottom: 20,
  },
});
