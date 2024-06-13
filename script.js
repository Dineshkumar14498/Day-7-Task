// a. Get all the Countries for asia continent / region using filter Method
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  const asianCountries = countryData.filter(country=>country.region=="Asia");
  console.log("Countries in Asia:", asianCountries);
  
  
  //b. Get all the Countries with a population of less then 2 lakhs using filter Method

  var countryData = JSON.parse(this.response);
  const populate = countryData.filter((element) => {
    return element.population < 200000;
  });
  console.log("Population less then 2 lakhs", populate);

  //c.Print the following details name, capital, flag using forEach function

  var countryData = JSON.parse(this.response);
  countryData.forEach((element) => {
    console.log(element.name, element.capital, element.flag);
  });

  //d. Print the total population of countries using reduce function

  var countryData = JSON.parse(this.response);
  const totalPopulation = countryData.reduce(
    (acc, country) => acc + country.population,
    0
  );
  console.log("Total Population:", totalPopulation);

  //e. Print the country which use US Dollars as currency

  const data = JSON.parse(this.response);
  const countriesUsingUSD = data.find((country) => country.currencies.USD);
  if (countriesUsingUSD) {
    console.log("Countries Using USD:", countriesUsingUSD.name.common);
  } else {
    console.log("No country is using US Dollar");
  }
};
