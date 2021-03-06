module.exports = Object.freeze({
  AVAILABLE_TIMEFRAMES: ['now', 'current', 'currently', 'today', 'tommorow', 'this week'],
  UNAVAILABLE_TIMEFRAMES: ['yesterday', 'next week', 'this month', 'this year'],
  
  // general categories
  GREETINGS: 'greetings.hello',
  FAREWELLS: 'greetings.bye',
  WEATHER_QUESTIONS: 'questions.weather',
  HELP_QUESTIONS: 'questions.help',
  HOW_ARE_YOU_QUESTIONS: 'questions.howareyou',
  WHATS_UP_QUESTIONS: 'questions.whatsup',
  HOW_ARE_YOU_POSITIVE_ANSWERS: 'answers.positive.howareyou',
  HOW_ARE_YOU_NEGATIVE_ANSWERS: 'answers.negative.howareyou',
  
  // questions categories
  SEA_LEVEL_QUESTIONS: 'questions.weather.sea_level',
  GROUND_LEVEL_QUESTIONS: 'questions.weather.ground_level',
  HUMIDITY_QUESTIONS: 'questions.weather.humidity',
  WIND_QUESTIONS: 'questions.weather.wind',
  RAIN_QUESTIONS: 'questions.weather.rain',
  SNOW_QUESTIONS: 'questions.weather.snow',
  TEMPERATURE_QUESTIONS: 'questions.weather.temp',
  MINIMAL_TEMPERATURE_QUESTIONS: 'questions.weather.min_temp',
  MAXIMUM_TEMPERATURE_QUESTIONS: 'questions.weather.max_temp',
  
  // units of measurement categories
  IMPERIAL_UNITS_OF_MEASUREMENT: 'questions.units_of_measurement.imperial',
  METRIC_UNITS_OF_MEASUREMENT: 'questions.units_of_measurement.metric',
});
