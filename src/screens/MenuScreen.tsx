import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../styles/theme';
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
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.eyebrow}>Directorio</Text>
                    <Text style={styles.title}>Perfiles</Text>
                </View>

                {PROFILES_DATA.map((profile) => (
                    <ProfileCard key={profile.id} profile={profile} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.md,
    paddingBottom: Theme.spacing.xl,
  },
  header: {
    marginBottom: Theme.spacing.lg,
  },
  eyebrow: {
    color: Theme.colors.accent,
    ...Theme.typography.eyebrow,
    marginBottom: Theme.spacing.xs,
  },
  title: {
    color: Theme.colors.textPrimary,
    ...Theme.typography.title,
  },
});