import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'; // Add this line to import the 'Text' component
import ComponentesQuarta from '../screens/componentesQuarta';
import TreinosQuarta from '../screens/TreinosQuarta';

const Tab = createBottomTabNavigator();

export default function TabRoutesQuarta (){

    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='treinoQuarta'
                component={TreinosQuarta}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name='componenteQuarta'
                component={ComponentesQuarta}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    tabBarLabel: () => <Text>Treinos</Text> 
                }}
            />
        </Tab.Navigator>
    )
}