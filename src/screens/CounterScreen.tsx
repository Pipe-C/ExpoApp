import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { counterStyles as styles } from '../styles/counterStyles';
import { AppStackParamList } from '../types/navigation';

type CounterScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'Counter'>;

export const CounterScreen: React.FC = () => {
  const navigation = useNavigation<CounterScreenNavigationProp>();
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    // Añadir al contador
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    // Evita que el contador sea negativo
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    // Reset
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>‹ Directorio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.headerTitle}>Contador</Text>

          <Text style={styles.counterValue}>{count}</Text>

          {count === 10 && (
            <View style={styles.messageBanner}>
              <Text style={styles.messageText}>¡Llegamos a los 10!</Text>
            </View>
          )}

          <View style={styles.controlsRow}>
            <TouchableOpacity
              style={[
                styles.decrementButton,
                count === 0 && styles.disabledButton,
              ]}
              onPress={decrement}
              disabled={count === 0}
            >
              <Text
                style={[
                  styles.decrementText,
                  count === 0 && styles.disabledText,
                ]}
              >
                - Decrementar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.incrementButton} onPress={increment}>
              <Text style={styles.incrementText}>+ Incrementar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.resetButton} onPress={reset}>
            <Text style={styles.resetButtonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};