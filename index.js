try {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q={Padang}&appid="
  );
  const json = await response.json();
  console.log(json);
} catch (error) {
  console.log(error);
}
