import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';
import { Theme } from '../styles/theme';

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  buttonText?: string;
  onClose: () => void;
}

export const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  title,
  message,
  buttonText = 'Entendido',
  onClose,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>

          <View style={styles.divider} />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Theme.colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing.xl,
  },
  alertContainer: {
    width: '100%',
    maxWidth: 290,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 18,
    overflow: 'hidden',
    ...Theme.shadows.alert,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: -0.4,
  },
  message: {
    fontSize: 13,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#C6C6C8',
  },
  button: {
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  buttonText: {
    color: Theme.colors.accent,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.4,
  },
});