import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabRoutesTerca from './tab.routes.terca';

const Stack =  createNativeStackNavigator();

export default function StackRoutes() {

    return(
        <Stack.Navigator screenOptions={{title: ''}}>
            <Stack.Screen
                name='home'
                component={TabRoutesTerca}
            />
        </Stack.Navigator>
    )
}