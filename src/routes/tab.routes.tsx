import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'; // Add this line to import the 'Text' component

import TreinosSegunda from '../screens/TreinosSegunda';
import Componentes from '../screens/componentes';

const Tab = createBottomTabNavigator();

export default function TabRoutes (){

    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='treinoSegunda'
                component={TreinosSegunda}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name='new'
                component={Componentes}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    tabBarLabel: () => <Text>Treinos</Text> 
                }}
            />
        </Tab.Navigator>
    )
}