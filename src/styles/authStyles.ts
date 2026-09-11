import { StyleSheet } from 'react-native';
import { Theme } from './theme';

export const authStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing.lg,
  },
  card: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.xl,
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
    ...Theme.shadows.card,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    letterSpacing: -0.5,
    marginBottom: Theme.spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: Theme.spacing.xl,
  },
  inputContainer: {
    marginBottom: Theme.spacing.md,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: Theme.colors.textSecondary,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#F2F2F7',
    borderRadius: Theme.borderRadius.md,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: 12,
    fontSize: 16,
    color: Theme.colors.textPrimary,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  errorBanner: {
    backgroundColor: '#FFE5E5',
    borderColor: '#FF3B30',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: Theme.borderRadius.md,
    marginBottom: Theme.spacing.md,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: Theme.colors.accent,
    paddingVertical: 14,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
    marginTop: Theme.spacing.sm,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  hintText: {
    fontSize: 12,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: Theme.spacing.md,
  },
});