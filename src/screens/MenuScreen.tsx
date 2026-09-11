import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { menuStyles as styles } from '../styles/profileStyles';
import { ProfileCard } from '../components/ProfileCard';
import { AppStackParamList } from '../types/navigation';
import { ProfileData } from '../types/profile';

type MenuNavProp = NativeStackNavigationProp<AppStackParamList, 'Menu'>;

const PROFILES: ProfileData[] = [
  {
    id: '1',
    name: 'Ana María Ríos',
    profession: 'Diseñadora UX/UI',
    city: 'Medellín',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80',
  },
  {
    id: '2',
    name: 'Carlos Ospina',
    profession: 'Ingeniero Backend',
    city: 'Bogotá',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
  },
  {
    id: '3',
    name: 'Sofia Gómez',
    profession: 'Product Manager',
    city: 'Cali',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  },
];

export const MenuScreen: React.FC = () => {
  const navigation = useNavigation<MenuNavProp>();
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
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.6}
          >
            <Text style={styles.backButtonText}>‹ Inicio</Text>
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.eyebrow}>Comunidad</Text>
            <Text style={styles.title}>Directorio de Perfiles</Text>
          </View>

          {PROFILES.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};