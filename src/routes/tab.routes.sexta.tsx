import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'; // Add this line to import the 'Text' component
import ComponentesSexta from '../screens/componentesSexta';
import TreinosSexta from '../screens/TreinosSexta';

const Tab = createBottomTabNavigator();

export default function TabRoutesSexta (){

    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='treinoSexta'
                component={TreinosSexta}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name='componenteSexta'
                component={ComponentesSexta}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    tabBarLabel: () => <Text>Treinos</Text> 
                }}
            />
        </Tab.Navigator>
    )
}