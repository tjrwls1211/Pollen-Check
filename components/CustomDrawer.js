import { View, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import GetStyle from './GetStyle';
import DataSourceTitle from './DataSourceTitle';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView 
      {...props} 
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
    >
      <View>
        <DrawerItemList {...props} />
        <DrawerItem 
          label="정보 출처"
          onPress={() => Linking.openURL('https://www.data.go.kr/data/15085289/openapi.do')}
          icon={DataSourceTitle}
        />
      </View>
      <View style={GetStyle.versionContainer}>
        <Text style={GetStyle.versionText}>버전 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
