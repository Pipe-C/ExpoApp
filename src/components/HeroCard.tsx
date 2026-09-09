import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../styles/theme';
import { HeroCardProps } from '../types/welcome';
import { Badge } from './Badge';
import { Button } from './Button';

export const HeroCard: React.FC<HeroCardProps> = ({ data, onPrimaryPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>{data.eyebrow}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>{data.subtitle}</Text>
      </View>

      <View style={styles.highlightsWrap}>
        {data.highlights.map((item) => (
          <Badge key={item.id} label={item.label} />
        ))}
      </View>

      <Button
        title={data.primaryActionText}
        onPress={onPrimaryPress}
        iconRight={<Text style={styles.arrowIcon}>→</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 390,
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.xl,
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
    ...Theme.shadows.card,
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
    marginBottom: Theme.spacing.sm,
  },
  subtitle: {
    color: Theme.colors.textSecondary,
    ...Theme.typography.subtitle,
  },
  highlightsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing.sm,
    marginBottom: Theme.spacing.xl,
  },
  arrowIcon: {
    color: Theme.colors.primaryText,
    fontSize: 18,
    fontWeight: '600',
  },
});