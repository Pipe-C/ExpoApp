import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { profileCardStyles as styles, menuStyles } from '../styles/profileStyles';
import { AppStackParamList } from '../types/navigation';
import { UserProfileData } from '../types/auth';

type ProfileNavProp = NativeStackNavigationProp<AppStackParamList, 'Profile'>;
type ProfileRouteProp = RouteProp<AppStackParamList, 'Profile'>;

const MOCK_PROFILE: UserProfileData = {
  username: 'admin',
  fullName: 'Felipe Cano Rincón',
  email: 'felipe.cano@pascualbravo.edu.co',
  role: 'Desarrollador Móvil',
  city: 'Medellín, Colombia',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
};

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileNavProp>();
  const route = useRoute<ProfileRouteProp>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={menuStyles.safeArea}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={menuStyles.container}>
          <TouchableOpacity
            style={menuStyles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.6}
          >
            <Text style={menuStyles.backButtonText}>‹ Inicio</Text>
          </TouchableOpacity>

          <View style={menuStyles.header}>
            <Text style={menuStyles.eyebrow}>Cuenta</Text>
            <Text style={menuStyles.title}>Perfil de Usuario</Text>
          </View>

          <View style={styles.cardContainer}>
            <Image
              source={{ uri: MOCK_PROFILE.avatarUrl }}
              style={styles.avatar}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.nameText}>{MOCK_PROFILE.fullName}</Text>
              <Text style={styles.professionText}>{MOCK_PROFILE.role}</Text>

              <View style={styles.locationBadge}>
                <View style={styles.locationDot} />
                <Text style={styles.cityText}>{MOCK_PROFILE.city}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailCard}>
            <Text style={styles.detailLabel}>CORREO ELECTRÓNICO</Text>
            <Text style={[styles.detailValue, { marginBottom: 12 }]}>
              {MOCK_PROFILE.email}
            </Text>

            <Text style={styles.detailLabel}>USUARIO DE SISTEMA</Text>
            <Text style={styles.detailValue}>
              @{route.params?.username || MOCK_PROFILE.username}
            </Text>
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};