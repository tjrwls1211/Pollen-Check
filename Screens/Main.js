import {Image, View, TouchableOpacity,Text} from 'react-native';
import GetStyle from '../components/GetStyle';
import pollen from '../assets/pollen.png';
import Time from '../components/Time'

export default function MainScreen({ navigation }) {
  return (
    <View style={GetStyle.container}>
      <Time/>
      <View style={GetStyle.imageContainer}>
        <Image
          style={{ width: 150, height: 150 }}
          source={pollen}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={GetStyle.button}
        onPress={() => navigation.navigate('Today')}
      >
        <Text style={GetStyle.buttonText}>오늘 꽃가루</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={GetStyle.button}
        onPress={() => navigation.navigate('Tomorrow')}
      >
        <Text style={GetStyle.buttonText}>내일 꽃가루</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={GetStyle.button}
        onPress={() => navigation.navigate('DayAfterTomorrow')}
      >
        <Text style={GetStyle.buttonText}>모레 꽃가루</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={GetStyle.button}
        onPress={() => navigation.navigate('PollenMap')}
      >
        <Text style={GetStyle.buttonText}>전국 현황</Text>
      </TouchableOpacity>
      
    </View>
  );
}



