const button = document.getElementById("button")
const input = document.getElementById("City-input")

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")


async function getdata(cityname ){
   const promice = await fetch(`http://api.weatherapi.com/v1/current.json?key=426d03cd4aa44ae485765248241005 &q=${cityname}&aqi=yes
   `)
   return await promice.json()
}

button.addEventListener("click", async() =>{
    const value = input.value
   const result =  await getdata(value)
   console.log(result)
   cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
   cityTime.innerText = result.location.localtime
   cityTemp.innerText = `${result.current.temp_c } °C `

})