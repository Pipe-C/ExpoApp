import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { counterStyles as styles } from '../styles/counterStyles';
import { AppStackParamList } from '../types/navigation';

type CounterNavigationProp = NativeStackNavigationProp<AppStackParamList, 'Counter'>;

export const CounterScreen: React.FC = () => {
  const navigation = useNavigation<CounterNavigationProp>();
  const [count, setCount] = useState<number>(0);
  const scaleValue = useRef(new Animated.Value(1)).current;

  const triggerPopAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const increment = () => {
    setCount((prev) => prev + 1);
    triggerPopAnimation();
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
    triggerPopAnimation();
  };

  const reset = () => {
    setCount(0);
    triggerPopAnimation();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
        >
          <Text style={styles.backButtonText}>‹ Inicio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.headerTitle}>Contador</Text>

          <Animated.Text
            style={[styles.counterValue, { transform: [{ scale: scaleValue }] }]}
          >
            {count}
          </Animated.Text>

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
              activeOpacity={0.7}
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

            <TouchableOpacity
              style={styles.incrementButton}
              onPress={increment}
              activeOpacity={0.7}
            >
              <Text style={styles.incrementText}>+ Incrementar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.resetButton} onPress={reset} activeOpacity={0.6}>
            <Text style={styles.resetButtonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};