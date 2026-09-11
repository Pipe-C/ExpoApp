import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { menuStyles as styles } from '../styles/profileStyles';
import { ProfileCard } from '../components/ProfileCard';
import { ProfileData } from '../types/profile';
import { AppStackParamList } from '../types/navigation';

// Definición del tipo para la navegación de esta pantalla
type MenuScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'Menu'>;

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
    // 1. Inicializa la navegación
  const navigation = useNavigation<MenuScreenNavigationProp>();

  // 2. Define la función para navegar a la pantalla del contador
  const handleGoToCounter = () => {
    navigation.navigate('Counter');
  };

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

        <TouchableOpacity
          style={{
            backgroundColor: '#007AFF',
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: 12,
            alignItems: 'center',
            marginTop: 16,
          }}
          onPress={handleGoToCounter}
        >
          <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 16 }}>
            Ir al Contador →
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};