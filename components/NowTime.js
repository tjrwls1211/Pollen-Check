import { View, Text } from 'react-native';
import GetStyle from './GetStyle';

export const getCurrentDate = () => {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const hour = String(today.getHours()).padStart(2, '0');
  return { year, month, day, hour, fullDate: `${year}${month}${day}${hour}` };
};

const NowTime = () => {
  const { year, month, day, hour } = getCurrentDate();

  return (
    <View style={GetStyle.button}>
      <Text style={GetStyle.buttonText}>현재 시간</Text>
      <Text style={GetStyle.buttonText}>{year}년 {month}월 {day}일 {hour}시</Text>
    </View>
  );
};

export default NowTime;
