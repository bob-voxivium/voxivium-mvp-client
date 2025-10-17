import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// --- REACT NAVIGATION IMPORTS ---
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --- SAFE AREA CONTEXT IMPORTS ---
// We replace the deprecated built-in SafeAreaView with the components from this library
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// --- LOCAL IMPORTS ---
// 1. Import Types (used for Stack creation)
import { RootStackParamList } from './src/types';
// 2. Import Styles
import styles from './src/styles';
// 3. Import Screens
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

// Create the Stack Navigator instance, typed with our ParamList
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * The persistent "North Panel" - rendered only once.
 * It uses the external SafeAreaView to ensure it starts below the notch/status bar.
 * The 'edges' prop is crucial here to specify which sides to apply padding to.
 */
const PersistentHeader: React.FC = () => (
  // We apply top safe area padding only to the header view
  <SafeAreaView style={styles.persistentHeaderSafe} edges={['top']}>
    <View style={styles.persistentHeaderContent}>
      {/* Left Icon */}
      <TouchableOpacity onPress={() => console.log('Menu pressed')}>
        <Text style={styles.headerIcon}>☰</Text>
      </TouchableOpacity> 
      {/* Center Logo */}
      <View style={styles.headerLogoContainer}>
        <Image
          source={require('./assets/vox_logo_small.png')}
          style={styles.headerLogo}
          resizeMode="contain"
        />
      </View> 
      {/* Right Icon */}
      <TouchableOpacity onPress={() => console.log('Profile pressed')}>
        <Text style={styles.headerIcon}>👤</Text>
      </TouchableOpacity>                
    </View>
  </SafeAreaView>
);

/**
 * Main component that sets up the Flexbox structure (BorderLayout analogy).
 */
const App = () => (
  // We wrap the entire application in the Provider for safe area insets to be available via hooks
  <SafeAreaProvider>
    {/* The main container acts as the overall flexible space */}
    <View style={styles.fullScreen}>
      {/* 1. North Panel (Fixed Header, with safe area inset applied) */}
      <PersistentHeader />

      {/* 2. Center Panel (Flexible Navigation Content) - This is the panel where screens appear */}
      <View style={styles.centerPanel}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            // We hide the stack's default header because we are using the PersistentHeader above
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* We import the screens from separate files */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  </SafeAreaProvider>
);

export default App;
