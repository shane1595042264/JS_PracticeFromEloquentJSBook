var cities = [['Shenzhen', 'Shanghai'],['NewYork', 'Washington'],['York', 'London']];

BigCities = cities.reduce((a, b)=> a.concat(b), []);
console.log(BigCities);