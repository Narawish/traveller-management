data = fetch(
  "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
).then((response) => response.json());

console.log(data);
