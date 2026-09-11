import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { homeStyles as styles } from '../styles/homeStyles';
import { AppStackParamList } from '../types/navigation';

type HomeNavProp = NativeStackNavigationProp<AppStackParamList, 'Home'>;
type HomeRouteProp = RouteProp<AppStackParamList, 'Home'>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeNavProp>();
  const route = useRoute<HomeRouteProp>();
  const username = route.params?.username || 'Usuario';

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.greeting}>Panel de Control</Text>
            <Text style={styles.title}>¡Hola, {username}!</Text>
          </View>

          <Text style={styles.sectionTitle}>Módulos Disponibles</Text>

          <View style={styles.grid}>
            <TouchableOpacity
              style={styles.actionCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Profile', { username })}
            >
              <Text style={styles.actionTitle}>👤 Mi Perfil</Text>
              <Text style={styles.actionSubtitle}>Ver información de la cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Menu')}
            >
              <Text style={styles.actionTitle}>📂 Directorio</Text>
              <Text style={styles.actionSubtitle}>Lista de perfiles registrados</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Counter')}
            >
              <Text style={styles.actionTitle}>🔢 Contador</Text>
              <Text style={styles.actionSubtitle}>Interactuar con la herramienta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Welcome')}
            >
              <Text style={styles.actionTitle}>✨ Bienvenida</Text>
              <Text style={styles.actionSubtitle}>Ver tarjeta Hero inicial</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            activeOpacity={0.8}
            onPress={() => navigation.replace('Login')}
          >
            <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};