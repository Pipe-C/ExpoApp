import React from 'react';
import { View, Text, Image } from 'react-native';
import { profileCardStyles as styles } from '../styles/profileStyles';
import { ProfileCardProps } from '../types/profile';

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: profile.imageUrl }}
        style={styles.avatar}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{profile.name}</Text>
        <Text style={styles.professionText}>{profile.profession}</Text>
        
        <View style={styles.locationBadge}>
          <View style={styles.locationDot} />
          <Text style={styles.cityText}>{profile.city}</Text>
        </View>
      </View>
    </View>
  );
};