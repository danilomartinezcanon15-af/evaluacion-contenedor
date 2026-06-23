import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { syncData } from './src/utils/cloudEngine';

export default function App() {
  const handleSync = async () => {
    const data = await syncData();
    Alert.alert('Sync completado', JSON.stringify(data).slice(0, 100));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boton} onPress={handleSync}>
        <Text style={styles.botonTexto}>🔄 SINCRONIZAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#FFD700',
    padding: 30,
    borderRadius: 16,
    width: '80%',
    alignItems: 'center',
  },
  botonTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
});
