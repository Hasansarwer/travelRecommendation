fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  // Do something with your data
})