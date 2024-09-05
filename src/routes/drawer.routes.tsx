import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import TabRoutes from './tab.routes'
import TabRoutesQuarta from './tab.routes.quarta';
import TabRoutesTerca from './tab.routes.terca';
import TabRoutesQuinta from './tab.routes.quinta';
import TabRoutesSexta from './tab.routes.sexta';

const Drawer =  createDrawerNavigator();

export default function DrawerRoutes() {

    return(
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen
                name='treinoSegunda'
                component={TabRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    drawerLabel: 'Segunda Feira'
                }}
            />
            <Drawer.Screen
                name='treinoDeTerca'
                component={TabRoutesTerca}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    drawerLabel: 'Terça Feira'
                }}
            />
            <Drawer.Screen
                name='treinoDoDiaQuarta'
                component={TabRoutesQuarta}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    drawerLabel: 'Quarta'
                }}
            />
            <Drawer.Screen
                name='treinoDodiaDaQuinta'
                component={TabRoutesQuinta}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    drawerLabel: 'Quinta'
                }}
            />
            <Drawer.Screen
                name='treinoDaSexta'
                component={TabRoutesSexta}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                    drawerLabel: 'Sexta'
                }}
            />
        </Drawer.Navigator>
    )
}