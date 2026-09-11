import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { welcomeStyles as styles } from '../styles/welcomeStyles';
import { HeroCard } from '../components/HeroCard';
import { CustomAlert } from '../components/CustomAlert';
import { useWelcomeData } from '../hooks/useWelcomeData';
import { AppStackParamList } from '../types/navigation';

type WelcomeNavProp = NativeStackNavigationProp<AppStackParamList, 'Welcome'>;

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeNavProp>();
  const { welcomeData, alertVisible, handlePress, handleConfirm } = useWelcomeData();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <TouchableOpacity
          style={{ alignSelf: 'flex-start', paddingVertical: 8, marginBottom: 12 }}
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
        >
          <Text style={{ color: '#007AFF', fontSize: 17 }}>‹ Inicio</Text>
        </TouchableOpacity>

        <Animated.View style={{ transform: [{ scale: scaleAnim }], width: '100%', alignItems: 'center' }}>
          <HeroCard data={welcomeData} onPress={handlePress} />
        </Animated.View>

        <CustomAlert
          visible={alertVisible}
          title="Notificación"
          message="Has interactuado con la tarjeta de bienvenida estilo iOS."
          onConfirm={handleConfirm}
        />
      </Animated.View>
    </SafeAreaView>
  );
};