import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import StackRoutes from './stack.routes';
import TabRoutes from './tab.routes'

const Drawer =  createDrawerNavigator();

export default function DrawerRoutes() {

    return(
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen
                name='home'
                component={TabRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                    drawerLabel: 'Segunda Feira'
                }}
            />
            <Drawer.Screen
                name='profile'
                component={StackRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='pocket' color={color} size={size}/>,
                    drawerLabel: 'Terça Feira'
                }}
            />
        </Drawer.Navigator>
    )
}