export interface HighlightItem {
  id: string;
  label: string;
}

export interface WelcomeData {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: HighlightItem[];
  primaryActionText: string;
}

export interface HeroCardProps {
  data: WelcomeData;
  onPrimaryPress: () => void;
}