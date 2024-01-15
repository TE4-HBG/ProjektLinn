import React from "react";
import { useQuery } from "@tanstack/react-query";

const weatherFetcher = async () => {
  const res = await fetch(
    "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/12.70030/lat/56.0421/data.json"
  );
  const data = await res.json();

  // Get current time and split its part into an array
  const currentTimeFetch = new Date();
  const currentTimeSplit = currentTimeFetch.toString().split(" ");

  const currentTime = currentTimeSplit[4];
  const closestHour = currentTime.split(":")[0].padStart(2, "0"); // Makes sure single digit hours are padded with a 0
  const currentMonth = currentTimeSplit[1];

  const getMonthNumber = (monthName) => {
    // Translates the month name into a number
    const months = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    return months[monthName];
  };
  const monthNumber = getMonthNumber(currentMonth);
  // Convert all the values into a string with the API format
  const searchTime =
    currentTimeSplit[3] +
    "-" +
    monthNumber +
    "-" +
    currentTimeSplit[2] +
    "T" +
    closestHour +
    ":00:00Z";

  // Compare searchTime to the API's timeSeries array and find the matching index to see exactly what data is available for the current time
  let matchingIndex = -1;

  data.timeSeries.forEach((timeSeries, index) => {
    if (timeSeries.validTime === searchTime) {
      matchingIndex = index;
      return;
    }
  });

  if (matchingIndex === -1) {
    throw new Error(`No matching data found for searchTime: ${searchTime}`);
  }

  return {
    currentTime,
    associatedTime: data.timeSeries[matchingIndex].validTime.slice(11, 16),
    weatherType: data.timeSeries[matchingIndex].parameters[18].values[0],
    temperature: data.timeSeries[matchingIndex].parameters[10].values[0],
    windSpeed: data.timeSeries[matchingIndex].parameters[14].values[0],
    rainAmount: data.timeSeries[matchingIndex].parameters[5].values[0],
  };
};

export const WeatherWidget = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["weatherWidget"],
    refetchInterval: 3600 * 1000,
    queryFn: weatherFetcher,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <p>{data.currentTime} - Current Time</p>
      <p>{data.associatedTime} - Associated time</p>
      <br />
      <p>{data.weatherType} - Weather Type</p>
      <p>{data.temperature} °C</p>
      <p>{data.windSpeed} m/s</p>
      <p>{data.rainAmount} mm/h - Average rain amount</p>
    </div>
  );
};
