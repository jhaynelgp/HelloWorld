import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MainCardProps {
  loading: boolean;
}

export default function MainCard({ loading }: MainCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {loading ? 'Cargando...' : 'Contenido Listo!'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});