import { useState } from 'react';
import { View, Picker } from 'react-native';

const CityPicker = ({ onCityChange }) => {
  const [city, setCity] = useState("1100000000");
  const handleCityChange = (cityNumber) => {
    setCity(cityNumber);
    onCityChange(cityNumber); 
  };
  return (
    <View >
      <Picker
        selectedValue={city}
        onValueChange={handleCityChange}
      >
        <Picker.Item label={"서울"} value="1100000000" />
        <Picker.Item label={"인천"} value="2800000000" />
        <Picker.Item label={"강릉"} value="5115000000" />
        <Picker.Item label={"대전"} value="3000000000" />
        <Picker.Item label={"부산"} value="2600000000" />
        <Picker.Item label={"대구"} value="2700000000" />
        <Picker.Item label={"광주"} value="2900000000" />
        <Picker.Item label={"아산"} value="4420000000" />
        <Picker.Item label={"제주"} value="5000000000" />
        <Picker.Item label={"울산"} value="3100000000" />
      </Picker>
    </View>
  );
};

export default CityPicker;
