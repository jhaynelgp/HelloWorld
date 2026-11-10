import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainCard from './MainCard';

export default function App() {
  // Variables con tu nombre y apellido según el requerimiento
  const nombre = "Jhaynel";
  const apellido = "Perez";

  // Estado inicial en true (cargando)
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Función para invertir el estado al presionar el botón
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <View style={styles.container}>
      {/* Texto con tu nombre usando variables */}
      <Text style={styles.title}>
        Hello World by {nombre} {apellido}
      </Text>

      {/* Componente MainCard recibiendo el estado como prop */}
      <MainCard loading={isLoading} />

      {/* Botón cuyo título cambia según el estado */}
      <Button 
        title={isLoading ? "Mostrar" : "Cargar"} 
        onPress={toggleLoading} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});