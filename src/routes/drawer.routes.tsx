import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

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
                    drawerLabel: 'Segunda feira'
                }}
            />
            <Drawer.Screen
                name='teste'
                component={TabRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    drawerLabel: 'Terça feira'
                }}
            />
            <Drawer.Screen
                name='mais'
                component={TabRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    drawerLabel: 'Quarta Feira'
                }}
            />
        </Drawer.Navigator>
    )
}