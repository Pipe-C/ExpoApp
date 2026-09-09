import { useState, useEffect } from 'react';
import { WelcomeData } from '../types/welcome';
import { fetchWelcomeData } from '../services/welcomeService';
import { sanitizeHighlights } from '../utils/formatters';

export const useWelcomeData = () => {
  const [data, setData] = useState<WelcomeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchWelcomeData();
        setData({
          ...result,
          highlights: sanitizeHighlights(result.highlights),
        });
      } catch (err) {
        setError('Error al cargar la información de bienvenida.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};