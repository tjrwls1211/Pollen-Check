import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import CityPicker from '../components/CityPicker';
import FetchPineTreePollen from '../components/FetchPineTreePollen';
import FetchOakTreePollen from '../components/FetchOakTreePollen';
import FetchWeedPollen from '../components/FetchWeedPollen';
import GetStyle from '../components/GetStyle';
import LoadingIndicator from '../components/LoadingIndicator';
import Time from '../components/Time';
import { getCurrentDate,getDaybeforeDate } from '../components/GetDate';
import sneeze from '../assets/sneeze.png';
import smile from '../assets/smile.png';
import mask from '../assets/mask.png';
import na from '../assets/na.png';


export default function Tomorrow() {
  const [cityNumber, setCityNumber] = useState("1100000000");
  const [oakTreePollenCount, setOakTreePollenCount] = useState("N/A");
  const [weedPollenCount, setWeedPollenCount] = useState("N/A");
  const [pineTreePollenCount, setPineTreePollenCount] = useState("N/A");
  const [loading, setLoading] = useState(true);

  const cityChange = (cityNumber) => {
    setCityNumber(cityNumber); // 선택된 도시 번호를 상태로 업데이트
  };


  useEffect(() => {
    const { year, month, day, hour } = getCurrentDate();
    let date;
    if (hour < 6) {
      const { year, month, day } = getDaybeforeDate();
      date = `${year}${month}${day}06`; // 6시 이전에는 오늘 꽃가루 값이 갱신이 안 되서 어제 값 사용
    } else {
      date = `${year}${month}${day}06`; // 6시 이후로는 오늘 꽃가루 값 갱신, 사용 가능
    } 
    setLoading(true);
    const fetchPollenData = async () => {
      try {
        const pineTreeData = await FetchPineTreePollen(cityNumber, date);
        setPineTreePollenCount(pineTreeData?.tomorrowCount || "N/A");
      } catch (error) {
        console.error('Error fetching pine tree pollen data:', error);
        setPineTreePollenCount("N/A");
      }

      try {
        const oakTreeData = await FetchOakTreePollen(cityNumber, date);
        setOakTreePollenCount(oakTreeData?.tomorrowCount || "N/A");
      } catch (error) {
        console.error('Error fetching oak tree pollen data:', error);
        setOakTreePollenCount("N/A");
      }

      try {
        const weedPollenData = await FetchWeedPollen(cityNumber, date);
        setWeedPollenCount(weedPollenData?.tomorrowCount || "N/A");
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
      <Time/>
      <Text style={GetStyle.text2}>현재 살고 계신 도시를 선택해주세요</Text>
      <CityPicker 
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
            <Text style={GetStyle.text}>제공 4 ~ 6월</Text>
          </View>
          <View style={GetStyle.imageContainer}>
            <Image
              style={GetStyle.image}
              source={getImageSource(oakTreePollenCount)}
              resizeMode="contain"
            />
            <Text style={GetStyle.pollenText}>참나무 꽃가루 : {oakTreePollenCount}</Text>
            <Text style={GetStyle.text}>제공 4 ~ 6월</Text>
          </View>
          <View style={GetStyle.imageContainer}>
            <Image
              style={GetStyle.image}
              source={getImageSource(weedPollenCount)}
              resizeMode="contain"
            />
            <Text style={GetStyle.pollenText}>잡초류 꽃가루 : {weedPollenCount}</Text>
            <Text style={GetStyle.text}>제공 8 ~ 10월</Text>
          </View>
        </View>
      )}
      <Text style={GetStyle.text}>안전 = 0, 보통 = 1, 위험 = 2</Text>
    </View>
  );
}
