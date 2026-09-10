export interface ProfileData {
    id: string;
    name: string;
    profession: string;
    city: string;
    imageUrl: string;
}

export interface ProfileCardProps {
    profile: ProfileData;
}