import React, { useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { welcomeStyles as styles } from '../styles/welcomeStyles';
import { HeroCard } from '../components/HeroCard';
import { CustomAlert } from '../components/CustomAlert';
import { useWelcomeData } from '../hooks/useWelcomeData';
import { AppStackParamList } from '../types/navigation';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'Welcome'>;

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const { data, loading, error } = useWelcomeData();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const handlePrimaryPress = () => {
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
    navigation.navigate('Menu');
  }

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