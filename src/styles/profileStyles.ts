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
  detailCard: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.md,
    marginTop: Theme.spacing.xs,
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
  },
  detailLabel: {
    fontSize: 12,
    color: Theme.colors.textSecondary,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  detailValue: {
    fontSize: 16,
    color: Theme.colors.textPrimary,
  },
});

export const menuStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.xs,
    paddingBottom: Theme.spacing.xl,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: Theme.spacing.xs,
    marginBottom: Theme.spacing.sm,
  },
  backButtonText: {
    color: Theme.colors.accent,
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: -0.4,
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
  navButton: {
    backgroundColor: Theme.colors.accent,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
    marginTop: Theme.spacing.md,
    ...Theme.shadows.card,
  },
  navButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: -0.3,
  },
});