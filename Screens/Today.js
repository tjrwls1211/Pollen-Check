import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import CityPicker from '../components/CityPicker';
import FetchPineTreePollen from '../components/FetchPineTreePollen';
import FetchOakTreePollen from '../components/FetchOakTreePollen';
import FetchWeedPollen from '../components/FetchWeedPollen';
import GetStyle from '../components/GetStyle';
import LoadingIndicator from '../components/LoadingIndicator';
import sneeze from '../assets/sneeze.png';
import smile from '../assets/smile.png';
import mask from '../assets/mask.png';
import na from '../assets/na.png';


export default function Today() {
  const [cityNumber, setCityNumber] = useState("1100000000");
  const [oakTreePollenCount, setOakTreePollenCount] = useState("N/A");
  const [weedPollenCount, setWeedPollenCount] = useState("N/A");
  const [pineTreePollenCount, setPineTreePollenCount] = useState("N/A");
  const [loading, setLoading] = useState(true);

  const cityChange = (cityNumber) => {
    setCityNumber(cityNumber); // 선택된 도시 번호를 상태로 업데이트
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = String(today.getFullYear());
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}${month}${day}06`; // 뒤에 06은 06시라는 뜻: 시간 임의 설정
  };

  useEffect(() => {
    const date = getCurrentDate();
    setLoading(true);

    const fetchPollenData = async () => {
      try {
        const pineTreeData = await FetchPineTreePollen(cityNumber, date);
        setPineTreePollenCount(pineTreeData?.todayCount || "N/A");
      } catch (error) {
        console.error('Error fetching pine tree pollen data:', error);
        setPineTreePollenCount("N/A");
      }

      try {
        const oakTreeData = await FetchOakTreePollen(cityNumber, date);
        setOakTreePollenCount(oakTreeData?.todayCount || "N/A");
      } catch (error) {
        console.error('Error fetching oak tree pollen data:', error);
        setOakTreePollenCount("N/A");
      }

      try {
        const weedPollenData = await FetchWeedPollen(cityNumber, date);
        setWeedPollenCount(weedPollenData?.todayCount || "N/A");
      } catch (error) {
        console.error('Error fetching weed pollen data:', error);
        setWeedPollenCount("N/A");
      } finally {
        setLoading(false);
      }
    };

    fetchPollenData();
  }, [cityNumber]);

  const getImageSource = (count) => {
    switch (count) {
      case "0":
        return smile;
      case "1":
        return mask;
      case "2":
        return sneeze;
      default:
        return na;
    }
  };

  return (
    <View style={GetStyle.container}>
      <Text style={GetStyle.text}>현재 살고 계신 도시를 선택해주세요</Text>
      <CityPicker 
        style={GetStyle.container}
        onCityChange={cityChange}
      />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={GetStyle.row}>
          <View style={GetStyle.imageContainer}>
            <Image
              style={GetStyle.image}
              source={getImageSource(pineTreePollenCount)}
              resizeMode="contain"
            />
            <Text style={GetStyle.pollenText}>소나무 꽃가루 : {pineTreePollenCount}</Text>
          </View>
          <View style={GetStyle.imageContainer}>
            <Image
              style={GetStyle.image}
              source={getImageSource(oakTreePollenCount)}
              resizeMode="contain"
            />
            <Text style={GetStyle.pollenText}>참나무 꽃가루 : {oakTreePollenCount}</Text>
          </View>
          <View style={GetStyle.imageContainer}>
            <Image
              style={GetStyle.image}
              source={getImageSource(weedPollenCount)}
              resizeMode="contain"
            />
            <Text style={GetStyle.pollenText}>잡초류 꽃가루 : {weedPollenCount}</Text>
          </View>
        </View>
      )}
      <Text style={GetStyle.text}>안전 = 0, 보통 = 1, 위험 = 2</Text>
    </View>
  );
}
