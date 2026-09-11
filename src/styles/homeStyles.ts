import { StyleSheet } from 'react-native';
import { Theme } from './theme';

export const homeStyles = StyleSheet.create({
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
    marginBottom: Theme.spacing.xl,
  },
  greeting: {
    fontSize: 13,
    fontWeight: '600',
    color: Theme.colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: Theme.colors.textPrimary,
    letterSpacing: -0.5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.md,
    letterSpacing: -0.3,
  },
  grid: {
    gap: Theme.spacing.md,
  },
  actionCard: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.lg,
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
    ...Theme.shadows.card,
  },
  actionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: Theme.colors.textSecondary,
  },
  logoutButton: {
    marginTop: Theme.spacing.xl,
    paddingVertical: 14,
    borderRadius: Theme.borderRadius.md,
    borderWidth: 1,
    borderColor: '#FF3B30',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
});