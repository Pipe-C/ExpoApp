import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps, View } from 'react-native';
import { Theme } from '../styles/theme';

export interface ButtonProps extends PressableProps {
  title: string;
  iconRight?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ title, iconRight, style, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.85 : 1.0,
          transform: [{ scale: pressed ? 0.98 : 1.0 }],
        },
        typeof style === 'function' ? style({ pressed }) : style,
      ]}
      {...props}
    >
      <Text style={styles.text}>{title}</Text>
      {iconRight && <View style={styles.iconWrapper}>{iconRight}</View>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.borderRadius.md,
    paddingVertical: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Theme.shadows.button,
  },
  text: {
    color: Theme.colors.primaryText,
    ...Theme.typography.button,
  },
  iconWrapper: {
    marginLeft: 8,
  },
});