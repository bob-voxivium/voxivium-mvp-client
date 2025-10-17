import React from 'react';
import { View, Text } from 'react-native';
// Import the shared types and styles
import { DetailScreenRouteProp } from '../types';
import styles from '../styles';

interface DetailScreenProps {
  route: DetailScreenRouteProp;
}

/**
 * Screen 2: Detail Screen
 * Receives and displays the parameters passed during navigation.
 */
const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  // TypeScript guarantees route.params has the properties defined in RootStackParamList
  const { itemId, userName } = route.params;

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtext}>
        This screen received data via the route parameters.
      </Text>
      <View style={styles.paramBox}>
        <Text style={styles.paramTitle}>Parameters Received:</Text>
        <Text style={styles.paramText}>Item ID: {itemId}</Text>
        <Text style={styles.paramText}>User Name: {userName}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
