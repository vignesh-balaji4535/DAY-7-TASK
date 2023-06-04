let data;
function printdata(){
   data=this.responseText;
  data=JSON.parse(data)
  console.log(data);
  asiaContinent();
  populationOfCountries();
  name_capital_flag();
  total_Population();
  country_use_US_Dollar()
}

//Get all the countries from Asia continent /region using Filter function
function asiaContinent(){
    data.filter((ele)=>{
        if(ele.continents[0]=="Asia"){
            console.log(ele.name.common)
        }
    })
}

//Get all the countries with a population of less than 2 lakhs using Filter function
  
function populationOfCountries(){
   data.filter((ele)=>{
    if(ele.population<=200000){
        console.log(ele.population)
    }
   })
}

//Print the following details name, capital, flag using forEach function

 function name_capital_flag(){
    data.forEach((ele)=>{
console.log(`NAME    : ${ele.name.common}`)
console.log(`CAPITAL : ${ele.capital}`);
console.log(`FLAG    : ${ele.flags.svg}`);
    })
       
 
}

// Print the total population of countries using reduce function

function total_Population(){
    let new_data=[];
    for(let i=0;i<data.length;i++){
        new_data.push(data[i].population);
    }
    let total_Popul=new_data.reduce((sumpop,popul)=>sumpop+popul);
    console.log(`TOTAL POPULATION : ${total_Popul}`);

}

// Print the country which uses US Dollars as currency.

function country_use_US_Dollar(){
  for(let i=0;i<data.length;i++){
    if(data[i].currencies!==undefined){
   
    if(data[i].currencies.USD!==undefined){
        console.log(`COUNTRY    : ${data[i].name.common}`);
        console.log(`DOLLAR-NAME: ${data[i].currencies.USD.name}`);
        console.log(`SYMBOL     : ${data[i].currencies.USD.symbol}`);
    };

   
    }

  }
}

        
    
  
   
   


let response=new XMLHttpRequest();
response.addEventListener("load",printdata)
response.open('GET',"https://restcountries.com/v3.1/all");

response.send();