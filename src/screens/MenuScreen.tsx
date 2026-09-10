import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { menuStyles as styles } from '../styles/profileStyles';
import { ProfileCard } from '../components/ProfileCard';
import { ProfileData } from '../types/profile';

const PROFILES_DATA: ProfileData[] = [
    {
        id: '1',
        name: 'Felipe Cano Rincon',
        profession: 'Desarrollador de Software',
        city: 'Medellín, Colombia',
        imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        id: '2',
        name: 'Juan Perez',
        profession: 'Diseñador Gráfico',
        city: 'Bogotá, Colombia',
        imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
];

export const MenuScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Directorio</Text>
          <Text style={styles.title}>Perfiles Registrados</Text>
        </View>

        {PROFILES_DATA.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};