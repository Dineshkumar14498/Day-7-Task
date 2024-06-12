// Get all the Countries for asia continent / region using filter Method
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((a)=>{
        if(a.region==='Asia'){
            return a.name;
        }
    })
    console.log("contries in Asia:",asia);

    // Get all the Countries with a population of less then 2 lakhs using filter Method

    var countryData=JSON.parse(this.response);
    const populate=countryData.filter((element)=>{
         return element.population<200000;
    })
    console.log("Population less then 2 lakhs",populate);


    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })

}




// Get all the Countries with a population of less then 2 lakhs using filter Method
