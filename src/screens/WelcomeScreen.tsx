import React, { useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { welcomeStyles as styles } from '../styles/welcomeStyles';
import { HeroCard } from '../components/HeroCard';
import { CustomAlert } from '../components/CustomAlert';
import { useWelcomeData } from '../hooks/useWelcomeData';

export const WelcomeScreen: React.FC = () => {
  const { data, loading, error } = useWelcomeData();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const handlePrimaryPress = () => {
    setAlertVisible(true);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error || !data) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error || 'Error al cargar los datos.'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Resplandor de fondo ajustado */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      {/* Tarjeta principal */}
      <HeroCard data={data} onPrimaryPress={handlePrimaryPress} />

      {/* Alerta iOS Simplificada */}
      <CustomAlert
        visible={alertVisible}
        title="¡Bienvenido!"
        message="La app está en desarrollo."
        buttonText="Entendido"
        onClose={() => setAlertVisible(false)}
      />

      <StatusBar style="dark" />
    </View>
  );
};