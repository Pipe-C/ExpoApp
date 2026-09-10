import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Theme } from '../styles/theme';
import { ProfileCardProps } from '../types/profile';

export const ProfileCard: React.FC<ProfileCardProps> = ({profile}) => {
    return (
        <View style={styles.cardContainer}>
            <Image
            source={{ uri: profile.imageUrl }}
            style={styles.avatar}
            resizeMode="cover"
            />

        <View style={styles.infoContainer}>
            <Text style={styles.nameText}>{profile.name}</Text>
            <Text style={styles.professionText}>{profile.profession}</Text>

            <View style={styles.locationBadge}>
                <View style={styles.locationDot} />
                <Text style={styles.cityText}>{profile.city}</Text>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
    ...Theme.shadows.card,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E5E5EA',
    marginRight: Theme.spacing.md,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    letterSpacing: -0.4,
    marginBottom: 2,
  },
  professionText: {
    fontSize: 14,
    fontWeight: '500',
    color: Theme.colors.textSecondary,
    marginBottom: Theme.spacing.xs,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Theme.colors.accent,
    marginRight: 6,
  },
  cityText: {
    fontSize: 12,
    fontWeight: '600',
    color: Theme.colors.accent,
    letterSpacing: -0.2,
  },
});