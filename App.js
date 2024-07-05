import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {TouchableOpacity,Image} from 'react-native';
import Main from './Screens/Main';  
import Today from './Screens/Today';
import Tomorrow from './Screens/Tomorrow';
import DayAfterTomorrow from './Screens/DayAfterTomorrow';
import CustomDrawer from './components/CustomDrawer';
import home from './assets/home.png';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName = "Main"
        screenOptions={{
          drawerPosition:"left",
          drawerStyle:{
            backgroundColor:'white',
            width:200
          },
          drawerActiveTintColor:"black",
          drawerInactiveTintColor:"black",
          drawerActiveBackgroundColor:"#D5DCA5",
        }}  
       drawerContent = {(props)=><CustomDrawer{...props}/>}

      >
        <Drawer.Screen 
          name="Main"
          component={Main}
          options={({ navigation }) => ({
            title: '꽃가루 알리미',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={home}
                  resizeMode="center"
                />
              </TouchableOpacity>
            ),
          })}
          />
        <Drawer.Screen 
          name="Today"
          component={Today}
          options={({ navigation }) => ({
            title: '오늘',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={home}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
          })} 
        />
        <Drawer.Screen 
          name="Tomorrow"
          component={Tomorrow}
          options={({ navigation }) => ({
            title: '내일',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={home}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
          })} 
        />
        <Drawer.Screen 
          name="DayAfterTomorrow"
          component={DayAfterTomorrow}
          options={({ navigation }) => ({
            title: '모레',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={home}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
          })} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
