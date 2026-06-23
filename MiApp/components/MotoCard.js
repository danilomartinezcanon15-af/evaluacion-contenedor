import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MotoCard({ moto, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(moto)}>
      <Image source={{ uri: moto.imagen }} style={styles.imagen} />
      <View style={styles.info}>
        <Text style={styles.nombre}>{moto.nombre}</Text>
        <Text style={styles.precio}>
          ${moto.precio.toLocaleString('es-CO')}
        </Text>
        <Text style={styles.km}>{moto.kilometraje.toLocaleString('es-CO')} km</Text>
        <Text style={[
          styles.llantas,
          { color: moto.estadoLlantas === 'cambio' ? '#FFD700' : '#4CAF50' }
        ]}>
          Llantas: {moto.estadoLlantas === 'cambio' ? '⚠ Para cambio' : '✓ Buen estado'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3A3A3A',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    width: '100%',
  },
  imagen: {
    width: '100%',
    height: 160,
  },
  info: {
    padding: 12,
  },
  nombre: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  precio: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 4,
  },
  km: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 4,
  },
  llantas: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 13,
  },
});

