export interface ProfileData {
  id: string;
  name: string;
  profession: string;
  city: string;
  avatarUrl: string;
}

export interface ProfileCardProps {
  profile: ProfileData;
}