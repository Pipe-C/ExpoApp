export interface WelcomeData {
  title: string;
  subtitle: string;
  badgeText?: string;
}

export interface HeroCardProps {
  data: WelcomeData;
  onPress?: () => void;
}