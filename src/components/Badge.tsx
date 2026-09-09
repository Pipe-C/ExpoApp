import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import { Theme } from '../styles/theme';

export interface BadgeProps extends ViewProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.indicatorDot} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.md,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Theme.colors.accentLight,
    borderWidth: 1,
    borderColor: Theme.colors.accentBorder,
  },
  indicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Theme.colors.accent,
    marginRight: 8,
  },
  text: {
    color: Theme.colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
});