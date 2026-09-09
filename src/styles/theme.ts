export const Theme = {
  colors: {
    background: '#F2F2F7', // iOS Light Background
    surface: '#FFFFFF', // Blanco puro sólido para evitar traslapes feos
    surfaceBorder: '#E5E5EA', // Borde fino estilo iOS
    textPrimary: '#1C1C1E',
    textSecondary: '#3C3C43',
    textMuted: '#8E8E93',
    primary: '#1C1C1E',
    primaryText: '#FFFFFF',
    accent: '#007AFF',
    accentLight: 'rgba(0, 122, 255, 0.08)',
    accentBorder: 'rgba(0, 122, 255, 0.18)',
    glowTop: 'rgba(0, 122, 255, 0.10)',
    glowBottom: 'rgba(88, 86, 214, 0.08)',
    overlay: 'rgba(0, 0, 0, 0.40)',
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 12,
    md: 16,
    lg: 28,
    full: 9999,
  },
  typography: {
    eyebrow: {
      fontSize: 12,
      fontWeight: '600' as const,
      letterSpacing: 1.8,
      textTransform: 'uppercase' as const,
    },
    title: {
      fontSize: 32,
      fontWeight: '700' as const,
      letterSpacing: -1.0,
      lineHeight: 38,
    },
    subtitle: {
      fontSize: 15,
      lineHeight: 22,
      fontWeight: '400' as const,
    },
    button: {
      fontSize: 17,
      fontWeight: '600' as const,
      letterSpacing: -0.4,
    },
  },
  shadows: {
    card: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.06,
      shadowRadius: 20,
      elevation: 4,
    },
    button: {
      shadowColor: '#1C1C1E',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      elevation: 3,
    },
    alert: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.15,
      shadowRadius: 32,
      elevation: 10,
    },
  },
};