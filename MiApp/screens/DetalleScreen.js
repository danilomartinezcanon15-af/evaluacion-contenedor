import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function DetalleScreen({ moto, onVolver }) {

  const calcularDepreciacion = () => {
    let precio = moto.precio;
    const km = moto.kilometraje;

    // Regla 1: pierde 0.05% por cada 1000 km
    const bloques = Math.floor(km / 1000);
    const perdidaKm = precio * (0.0005 * bloques);
    precio -= perdidaKm;

    // Regla 2: si llantas para cambio, pierde $500.000
    if (moto.estadoLlantas === 'cambio') {
      precio -= 500000;
    }

    // Regla 3: si supera 80.000 km, mostrar alerta
    if (km > 80000) {
      Alert.alert(
        '⚠ Validar Puntura',
        'Esta moto supera los 80.000 km. Se recomienda validar el puntaje técnico antes de comprar.',
        [{ text: 'Entendido' }]
      );
    }

    return {
      precioFinal: Math.round(precio),
      perdidaKm: Math.round(perdidaKm),
      perdidaLlantas: moto.estadoLlantas === 'cambio' ? 500000 : 0,
      riesgo: km > 80000 ? 'ALTO' : km > 40000 ? 'MEDIO' : 'BAJO',
    };
  };

  const resultado = calcularDepreciacion();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.botonVolver} onPress={onVolver}>
        <Text style={styles.botonVolverTexto}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>{moto.nombre}</Text>

      <View style={styles.seccion}>
        <Text style={styles.subtitulo}>📊 Calculadora de Depreciación</Text>

        <View style={styles.fila}>
          <Text style={styles.label}>Precio original:</Text>
          <Text style={styles.valor}>${moto.precio.toLocaleString('es-CO')}</Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.label}>Kilometraje:</Text>
          <Text style={styles.valor}>{moto.kilometraje.toLocaleString('es-CO')} km</Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.label}>Pérdida por km:</Text>
          <Text style={styles.valorNegativo}>-${resultado.perdidaKm.toLocaleString('es-CO')}</Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.label}>Pérdida por llantas:</Text>
          <Text style={styles.valorNegativo}>-${resultado.perdidaLlantas.toLocaleString('es-CO')}</Text>
        </View>

        <View style={styles.separador} />

        <View style={styles.fila}>
          <Text style={styles.labelTotal}>Precio estimado:</Text>
          <Text style={styles.valorTotal}>${resultado.precioFinal.toLocaleString('es-CO')}</Text>
        </View>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.subtitulo}>⚙ Riesgo Mecánico</Text>
        <View style={[styles.badgeRiesgo, {
          backgroundColor:
            resultado.riesgo === 'ALTO' ? '#FF4444' :
            resultado.riesgo === 'MEDIO' ? '#FFD700' : '#4CAF50'
        }]}>
          <Text style={styles.badgeTexto}>Riesgo: {resultado.riesgo}</Text>
        </View>
        <Text style={styles.descripcionRiesgo}>
          {resultado.riesgo === 'ALTO'
            ? 'Moto con alto kilometraje. Revisar motor, frenos y sistema eléctrico.'
            : resultado.riesgo === 'MEDIO'
            ? 'Kilometraje moderado. Revisar frenos y cadena.'
            : 'Kilometraje bajo. Buen estado general esperado.'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    padding: 16,
  },
  botonVolver: {
    marginBottom: 16,
  },
  botonVolverTexto: {
    color: '#FFD700',
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 16,
  },
  titulo: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  seccion: {
    backgroundColor: '#3A3A3A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  subtitulo: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 12,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 13,
    color: '#CCCCCC',
  },
  valor: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 13,
    color: '#FFFFFF',
  },
  valorNegativo: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 13,
    color: '#FF6B6B',
  },
  separador: {
    borderTopWidth: 1,
    borderTopColor: '#555',
    marginVertical: 8,
  },
  labelTotal: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  valorTotal: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    color: '#4CAF50',
  },
  badgeRiesgo: {
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  badgeTexto: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  descripcionRiesgo: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 13,
    color: '#CCCCCC',
    lineHeight: 20,
  },
});

