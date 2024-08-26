import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import FetchPineTreePollen from '../components/FetchPineTreePollen';
import FetchOakTreePollen from '../components/FetchOakTreePollen';
import FetchWeedPollen from '../components/FetchWeedPollen';
import GetStyle from '../components/GetStyle';
import { getCurrentDate,getDaybeforeDate } from '../components/GetDate';
import ActivityIndicator from '../components/LoadingIndicator';

const cityCoordinates = {
  "1100000000": { name: "서울", x: 0.3, y: 0.32 },
  "2800000000": { name: "인천", x: 0.19, y: 0.35 },
  "5115000000": { name: "강릉", x: 0.65, y: 0.3 },
  "3000000000": { name: "대전", x: 0.35, y: 0.46 },
  "2600000000": { name: "부산", x: 0.67, y: 0.59 },
  "2700000000": { name: "대구", x: 0.58, y: 0.5 },
  "2900000000": { name: "광주", x: 0.3, y: 0.6 },
  "4420000000": { name: "아산", x: 0.32, y: 0.41 },
  "3100000000": { name: "울산", x: 0.7, y: 0.55 }
};

const cities = Object.keys(cityCoordinates);

const fetchAllPineTreeData = async (date) => {
  const allData = {};
  for (const cityNumber of cities) {
    try {
      const pineTreeData = await FetchPineTreePollen(cityNumber, date);
      allData[cityNumber] = pineTreeData.todayCount || "N/A";
    } catch (error) {
      console.error(`Error fetching data for city ${cityNumber}:`, error);
      allData[cityNumber] = "N/A"; 
   }
  }
  return allData;
};

const fetchAllOakTreeData = async (date) => {
  const allData = {};
  for (const cityNumber of cities) {
    try {
      const oakTreeData = await FetchOakTreePollen(cityNumber, date);
      allData[cityNumber] = oakTreeData.todayCount || "N/A";
    } catch (error) {
      console.error(`Error fetching data for city ${cityNumber}:`, error);
      allData[cityNumber] = "N/A";   }
  }
  return allData;
};

const fetchAllWeedData = async (date) => {
  const allData = {};
  for (const cityNumber of cities) {
    try {
      const weedData = await FetchWeedPollen(cityNumber, date);
      allData[cityNumber] = weedData.todayCount || "N/A";
    } catch (error) {
      console.error(`Error fetching data for city ${cityNumber}:`, error);
      allData[cityNumber] = "N/A"; 
    }
  }
  return allData;
};

export default function PollenMap() {
  const [choosePollen, setChoosePollen] = useState("0");
  const [cityData, setCityData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { year, month, day, hour } = getCurrentDate();
    let date;
    if (hour < 6) {
      const { year, month, day } = getDaybeforeDate();
      date = `${year}${month}${day}06`; // 6시 이전에는 오늘 꽃가루 값이 갱신이 안 되서 어제 값 사용
    } else {
      date = `${year}${month}${day}06`; // 6시 이후로는 오늘 꽃가루 값 갱신, 사용 가능
    }
     const fetchData = async () => {
      setLoading(true);
      try {
        switch (choosePollen) {
          case "0": {
            const allPineTreeData = await fetchAllPineTreeData(date);
            setCityData(allPineTreeData);
            break;
          }
          case "1": {
            const allOakTreeData = await fetchAllOakTreeData(date);
            setCityData(allOakTreeData);
            break;
          }
          case "2": {
            const allWeedData = await fetchAllWeedData(date);
            setCityData(allWeedData);
            break;
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error); // Error handling
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [choosePollen]);

  const { width, height } = Dimensions.get('window');

  return (
    <View style={GetStyle.container}>
      <View style={GetStyle.buttonContainer}>
        <View style={GetStyle.buttonRow}>
          <TouchableOpacity 
            style={GetStyle.pollenMapButton} 
            onPress={() => setChoosePollen("0")}
          >
            <Text style={GetStyle.buttonText}>소나무 수치</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={GetStyle.pollenMapButton} 
            onPress={() => setChoosePollen("1")}
          >
            <Text style={GetStyle.buttonText}>참나무 수치</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={GetStyle.pollenMapButton} 
            onPress={() => setChoosePollen("2")}
          >
            <Text style={GetStyle.buttonText}>잡초류 수치</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image source={require('../assets/korea_map.png')} style={GetStyle.mapImage} />
          {cities.map((cityNumber) => (
            <View
              key={cityNumber}
              style={[
                GetStyle.cityContainer,
                { top: height * cityCoordinates[cityNumber].y, left: width * cityCoordinates[cityNumber].x }
              ]}
            >
              <Text style={GetStyle.pollenMapText}>{`${cityCoordinates[cityNumber].name} : ${cityData[cityNumber]}`}</Text>
            </View>
          ))}
        </>
      )}
      <View style={GetStyle.underTextContainer}>
        <Text style={GetStyle.text}>참나무, 소나무 정보 제공 4 ~ 6 월</Text>
        <Text style={GetStyle.text}>잡초류 정보 제공 8 ~ 10월</Text>
      </View>
    </View>
  );
}

