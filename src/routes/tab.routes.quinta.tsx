import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'; // Add this line to import the 'Text' component
import ComponentesQuinta from '../screens/componentesQuinta';
import TreinosQuinta from '../screens/TreinosQuinta';

const Tab = createBottomTabNavigator();

export default function TabRoutesQuinta (){

    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='treinoQuinta'
                component={TreinosQuinta}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name='componenteQuinta'
                component={ComponentesQuinta}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    tabBarLabel: () => <Text>Treinos</Text> 
                }}
            />
        </Tab.Navigator>
    )
}