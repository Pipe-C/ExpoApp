import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HeroCardProps } from '../types/welcome';
import { Theme } from '../styles/theme';

export const HeroCard: React.FC<HeroCardProps> = ({ data, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {data.badgeText && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.badgeText}</Text>
        </View>
      )}
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.xl,
    width: '100%',
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
    ...Theme.shadows.card,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5F1FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: Theme.spacing.sm,
  },
  badgeText: {
    color: Theme.colors.accent,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.xs,
  },
  subtitle: {
    fontSize: 15,
    color: Theme.colors.textSecondary,
    lineHeight: 22,
  },
});