import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import New from '../screens/New'
import TreinosSegunda from '../screens/TreinosSegunda';
import Profile from '../screens/Profile';
import TreinosTerca from '../screens/TreinosTerca';

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
                component={New}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    tabBarLabel: 'Treinos'
                }}
            />
        </Tab.Navigator>
    )
}