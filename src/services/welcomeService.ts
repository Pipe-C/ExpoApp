import { WelcomeData } from '../types/welcome';

export const fetchWelcomeData = async (): Promise<WelcomeData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        eyebrow: 'Experiencia iOS',
        title: 'Tu próximo\ngran paso',
        subtitle:
          'Una interfaz construida con precisión artesanal, pensada para sentirse fluida, clara y sofisticada.',
        highlights: [
          { id: '1', label: 'Mi Primera APP en Expo Go' },
          { id: '2', label: 'Felipe Cano Rincon' },
          { id: '3', label: 'Desarrollo de Dispositivos Móviles' },
          { id: '4', label: 'Institución Universitaria Pascual Bravo' },
        ],
        primaryActionText: 'Continuar',
      });
    }, 300);
  });
};