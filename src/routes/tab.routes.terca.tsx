import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import TreinosTerca from '../screens/TreinosTerca';
import ComponentesTerca from '../screens/componentesTerca';

const Tab = createBottomTabNavigator();

export default function TabRoutesTerca (){

    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='treinoTerca'
                component={TreinosTerca}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name='componenteTerca'
                component={ComponentesTerca}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    tabBarLabel: 'Treinos'
                }}
            />
        </Tab.Navigator>
    )
}