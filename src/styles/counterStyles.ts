import { StyleSheet } from 'react-native';
import { Theme } from './theme';

export const counterStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  topBar: {
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.xs,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: Theme.spacing.xs,
  },
  backButtonText: {
    color: Theme.colors.accent,
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: -0.4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.lg,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
    ...Theme.shadows.card,
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: Theme.spacing.xs,
  },
  counterValue: {
    fontSize: 80,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    letterSpacing: -1,
    marginVertical: Theme.spacing.sm,
  },
  messageBanner: {
    backgroundColor: '#34C759',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: Theme.spacing.lg,
  },
  messageText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: -0.2,
  },
  controlsRow: {
    flexDirection: 'row',
    gap: Theme.spacing.sm,
    width: '100%',
    marginBottom: Theme.spacing.sm,
  },
  incrementButton: {
    flex: 1,
    backgroundColor: Theme.colors.accent,
    paddingVertical: 14,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
  },
  incrementText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  decrementButton: {
    flex: 1,
    backgroundColor: '#E5F1FF',
    paddingVertical: 14,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
  },
  decrementText: {
    color: Theme.colors.accent,
    fontWeight: '600',
    fontSize: 15,
  },
  disabledButton: {
    backgroundColor: '#F2F2F7',
    opacity: 0.6,
  },
  disabledText: {
    color: '#8E8E93',
  },
  resetButton: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: Theme.spacing.xs,
  },
  resetButtonText: {
    color: '#FF3B30',
    fontWeight: '500',
    fontSize: 15,
  },
});