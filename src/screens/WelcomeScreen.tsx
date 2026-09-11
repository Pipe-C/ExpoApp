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

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'Welcome'>;

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { data, loading, error } = useWelcomeData();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  // 1. Al presionar el botón del HeroCard, se muestra la alerta de bienvenida
  const handlePrimaryPress = () => {
    setAlertVisible(true);
  };

  // 2. Al presionar "Entendido" en la alerta, se cierra la alerta y se navega al Menú
  const handleAlertClose = () => {
    setAlertVisible(false);
    navigation.navigate('Menu');
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
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      {/* HeroCard recibe handlePrimaryPress por props */}
      <HeroCard data={data} onPrimaryPress={handlePrimaryPress} />

      {/* CustomAlert recibe handleAlertClose para hacer el cambio de pantalla */}
      <CustomAlert
        visible={alertVisible}
        title="¡Bienvenido!"
        message="La app está en desarrollo."
        buttonText="Entendido"
        onClose={handleAlertClose}
      />

      <StatusBar style="dark" />
    </View>
  );
};