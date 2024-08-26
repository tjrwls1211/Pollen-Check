import { View, Text } from 'react-native';
import GetStyle from './GetStyle';
import { getCurrentDate } from './GetDate';

const Time = () => {
  const { year, month, day, hour } = getCurrentDate();
  return (
    <View style={GetStyle.buttonContainer}>
      <Text style={GetStyle.text}>현재 시간</Text>
      <Text style={GetStyle.text}>{year}년 {month}월 {day}일 {hour}시</Text>
    </View>
  );
};

export default Time;
