import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// 1. RootStackParamList: Maps route names to their accepted parameters
export type RootStackParamList = {
  Home: undefined; // Takes no parameters
  Details: { itemId: number; userName: string }; // Requires itemId and userName
};

// 2. Typed Navigation Props: Used by screens to navigate
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

// 3. Typed Route Props: Used by screens to access parameters
export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
