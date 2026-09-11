import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { counterStyles as styles } from '../styles/counterStyles';

export const CounterScreen: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        // Evita que el contador sea negativo
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.card}>
                <Text style={styles.headerTitle}>Contador</Text>
                
                <Text style={styles.counterValue}>{count}</Text>

                {/* Mensaje directo al llegar a 10 */}
                { count === 10 && (
                    <View style={styles.messageBanner}>
                        <Text style={styles.messageText}>¡Llegamos a los 10!</Text>
                    </View>
                )}

                <View style={styles.controlsRow}>
                    <TouchableOpacity style={[styles.actionButton, count === 0 && styles.disabledButton]} 
                    onPress={decrement}
                    disabled={count === 0}>
                        <Text style={styles.buttonText}>- Decrementar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton} onPress={increment}>
                        <Text style={styles.buttonText}>+ Incrementar</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={reset}>
                    <Text style={styles.resetButtonText}>Resetear</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}