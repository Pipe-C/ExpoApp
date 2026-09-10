import { StyleSheet } from 'react-native';
import { Theme } from './theme';

export const profileCardStyles = StyleSheet.create({
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

export const menuStyles = StyleSheet.create({
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
  },
});