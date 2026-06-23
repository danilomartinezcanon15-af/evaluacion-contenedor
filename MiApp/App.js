import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { SpaceMono_400Regular } from '@expo-google-fonts/space-mono';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import MotoCard from './components/MotoCard';
import motos from './data/motos.json';

export default function App() {
  const [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  const handleSeleccionarMoto = (moto) => {
    console.log('Moto seleccionada:', moto.nombre);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>🏍 Concesionario</Text>
      <FlatList
        data={motos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MotoCard moto={item} onPress={handleSeleccionarMoto} />
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
