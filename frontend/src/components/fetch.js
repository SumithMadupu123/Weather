// Function to fetch weather forecast data from the API
async function fetchWeatherForecast(city) {
    const apiKey = '0770df201288b97149d3b4937417f34c'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  }
  
  // Function to extract the temperature for the next three days
  function extractTemperature(data) {
    const temperatureData = {};
  
    // Get the current date
    const currentDate = new Date();
  
    // Loop through the forecast list
    for (const item of data.list) {
      // Convert the dt_txt to a Date object
      const date = new Date(item.dt_txt);
  
      // Check if the date is within the next three days
      if (date > currentDate && date <= currentDate.setDate(currentDate.getDate() + 3)) {
        // Extract the date part from the dt_txt (YYYY-MM-DD format)
        const dateString = date.toISOString().split('T')[0];
  
        // Check if the date already exists in the temperature data
        if (!temperatureData[dateString]) {
          temperatureData[dateString] = [];
        }
  
        // Convert temperature from Kelvin to Celsius
        const temperatureCelsius = Math.round(item.main.temp - 273.15);
  
        // Add the temperature to the corresponding date
        temperatureData[dateString].push(temperatureCelsius);
      }
    }
  
    return temperatureData;
  }
  
  // Fetch the weather forecast for London
  fetchWeatherForecast('London')
    .then((data) => {
      const temperatureData = extractTemperature(data);
      console.log('Temperature Data:', temperatureData);
    })
    .catch((error) => {
      console.log('Error fetching weather forecast:', error);
    });
  