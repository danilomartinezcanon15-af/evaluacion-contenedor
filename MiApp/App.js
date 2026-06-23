import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {
  SpaceMono_400Regular,
} from '@expo-google-fonts/space-mono';
import {
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Concesionario</Text>
      <Text style={styles.datos}>Precio: $15.000.000</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  datos: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
