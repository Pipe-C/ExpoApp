import { useState } from 'react';
import { WelcomeData } from '../types/welcome';

export const useWelcomeData = () => {
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const welcomeData: WelcomeData = {
    title: '¡Bienvenido de nuevo!',
    subtitle: 'Explora los módulos y componentes dinámicos con interfaz estilo iOS.',
    badgeText: 'iOS 18 Design System',
  };

  const handlePress = () => {
    setAlertVisible(true);
  };

  const handleConfirm = () => {
    setAlertVisible(false);
  };

  return {
    welcomeData,
    alertVisible,
    handlePress,
    handleConfirm,
  };
};