import React from 'react';
import { View, Text, Button } from 'react-native';
// Import the shared types and styles
import { HomeScreenNavigationProp } from '../types';
import styles from '../styles';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

/**
 * Screen 1: Home Screen
 * Renders in the dynamic center panel.
 */
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const navigateToDetails = () => {
    // TypeScript ensures 'Details' receives the correct shape of parameters
    navigation.navigate('Details', {
      itemId: Math.floor(Math.random() * 1000) + 1, // Generate a unique ID
      userName: 'Alex Johnson',
    });
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtext}>
        This is the dynamic content area. Press the button to navigate and pass data.
      </Text>
      <Button
        title="Go to Details Screen"
        onPress={navigateToDetails}
        color="#3498db"
      />
    </View>
  );
};

export default HomeScreen;
