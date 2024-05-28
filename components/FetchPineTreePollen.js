const FetchPineTreePollen = (cityNumber, date) => {
  return fetch(`https://apis.data.go.kr/1360000/HealthWthrIdxServiceV3/getPinePollenRiskIdxV3?serviceKey=PR2F0BLMetFiBoKaFaD9Tz7tCfK783UkoEcTBiE2Hp8oyrtZ2pT3nBwONkpX5hJ81rv83L6%2BfEUvTOpCclVHwA%3D%3D&numOfRows=10&pageNo=1&dataType=JSON&areaNo=${cityNumber}&time=${date}`) //소나무 꽃가루 api 호출
    .then(response => response.json())
    .then(responseData => {
      const todayCount = responseData.response.body.items.item[0].today; // 오늘의 꽃가루 수치 추출
      const tomorrowCount = responseData.response.body.items.item[0].tomorrow; // 내일의 꽃가루 수치 추출
      const dayAfterTomorrowCount = responseData.response.body.items.item[0].dayaftertomorrow; // 모레의 꽃가루 수치 추출
      return { todayCount, tomorrowCount,dayAfterTomorrowCount };
    })
    .catch(error => {
      console.error('Error fetching data:', error); // 에러 처리
      throw error;
    });
};

export default FetchPineTreePollen