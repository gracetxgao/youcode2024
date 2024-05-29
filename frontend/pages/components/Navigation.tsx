import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Opening: undefined;
  Login: undefined;
  Signup: undefined;
  MainTabs: undefined;
  Venture: { title: string; image: string, points: string, description: string };
  VentureCategory: { category: string; cards: Array<Array<String>> };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default Stack;