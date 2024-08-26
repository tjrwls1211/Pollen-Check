const FetchOakTreePollen = (cityNumber, date) => {
  const serviceKey = process.env.REACT_APP_SERVICE_KEY
  return fetch(`https://apis.data.go.kr/1360000/HealthWthrIdxServiceV3/getOakPollenRiskIdxV3?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&dataType=JSON&areaNo=${cityNumber}&time=${date}`) //참나무 꽃가루 api 호출 ** 안되면 api 키 인코딩 -> 디코딩으로 바꿔서 해보기
    .then(response => response.json())
    .then(responseData => {
      const todayCount = responseData.response.body.items.item[0].today; // 오늘의 꽃가루 수치 추출
      const tomorrowCount = responseData.response.body.items.item[0].tomorrow; // 내일의 꽃가루 수치 추출
      const dayAfterTomorrowCount = responseData.response.body.items.item[0].dayaftertomorrow; // 모레의 꽃가루 수치 추출
      return { todayCount, tomorrowCount, dayAfterTomorrowCount };
    })
    .catch(error => {
      throw error;
    });
};

export default FetchOakTreePollen