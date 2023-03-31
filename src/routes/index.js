import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import Sign from '../pages/Sign';
import Register from '../pages/Register';
import Login from '../pages/Login';

const stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <stack.Navigator>
            <stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown:false}}/>

            <stack.Screen
                name="Sign"
                component={Sign}
                options={{headerShown:false}}/>

            
            <stack.Screen
                name="Register"
                component={Register}
                options={{headerShown:false}}/>

            <stack.Screen
                name="Login"
                component={Login}
                options={{headerShown:false}}/>
        </stack.Navigator>
    )}