// This timer is a component that is linked to slide timer only fix the syling and make sure the time is saved in the data base

import React, { useState, useEffect } from "react";
// @ts-ignore
import ntiLogo from "../assets/ntiLogo.svg";

const size = "2x1"; //Size for layout purposes. Later it should be getting this from the Database

export const CountdownWidget = ({ data }) => {
  //tar emot key datatime och skapar ett Date object
  const { datetime } = data;
  const receivedDate = new Date(datetime);

  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    //Update time every 1000ms
    const interval = setInterval(() => {
      getTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    //Calculate remaining time from date and format it.
    const dateNow = new Date();
    const timeDifference = receivedDate - dateNow;

    console.log(receivedDate);
    //converterar till dagar, timmar osv
    const calculatedDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const calculatedHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const calculatedMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const calculatedSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // padStart Formats values to always have two digits, if they already 2 digits
    // no "0" gets added, if digits are less than 2 in length "0" gets added
    const formattedDays = String(calculatedDays).padStart(2, "0");
    const formattedHours = String(calculatedHours).padStart(2, "0");
    const formattedMinutes = String(calculatedMinutes).padStart(2, "0");
    const formattedSeconds = String(calculatedSeconds).padStart(2, "0");

    setDaysLeft(formattedDays);
    setHoursLeft(formattedHours);
    setMinutesLeft(formattedMinutes);
    setSecondsLeft(formattedSeconds);
  }

  if (size === "1x1") {
    //Widget layouts are returned depending on their size in grid
    return (
      <>
        <div className="flex flex-col countdownDiv aspect-square">
          <div className="flex justify-center mt-10 countdownTopTextDiv">
            <h1 className="text-center countdownTopText text-8xl">Jul-Lan</h1>
          </div>
          <div className="flex items-center justify-center flex-grow countdownCountdownDiv">
            <div className="countdownNumbers">
              <p className="text-[13rem] font-bold">
                {daysLeft}:{hoursLeft}:{minutesLeft}:{secondsLeft}
              </p>
            </div>
          </div>
          <div className="mb-10 countdownFooter">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="w-8/12 mx-auto" />
          </div>
        </div>
      </>
    );
  } else if (size === "1x2") {
    return (
      <>
        <div className="countdownDiv aspect-[1/2] flex flex-col">
          <div className="flex justify-center mt-10 countdownTopTextDiv">
            <h1 className="text-center countdownTopText text-8xl">Jul-Lan</h1>
          </div>
          <div className="flex flex-col justify-center flex-grow countdownCountdownDiv">
            <table className="mt-40">
              <tr>
                <td>
                  <h3 className="text-right text-[9rem] ml-[30%] font-bold">
                    {daysLeft}
                  </h3>
                </td>
                <td>
                  <p className="ml-10 text-6xl">Dagar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    {hoursLeft}
                  </h3>
                </td>
                <td>
                  <p className="ml-10 text-6xl">Timmar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    {minutesLeft}
                  </h3>
                </td>
                <td>
                  <p className="ml-10 text-6xl">Minuter</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    {secondsLeft}
                  </h3>
                </td>
                <td>
                  <p className="ml-10 text-6xl">Sekunder</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="mb-10 countdownFooter">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="w-8/12 mx-auto" />
          </div>
        </div>
      </>
    );
  } else if (size === "2x1") {
    return (
      <>
        <div className="countdownDiv aspect-[2/1] flex flex-col">
          <div className="flex justify-center mt-10 countdownTopTextDiv">
            <h1 className="text-center countdownTopText text-8xl">Jul-Lan</h1>
          </div>
          <div className="flex flex-col justify-center flex-grow text-center countdownCountdownDiv">
            <table className="table-fixed ml-[10%] mr-[10%]">
              <tr>
                <td className="w-3/12">
                  <h3 className="font-semibold text-9xl">{daysLeft}</h3>
                  <p className="text-2xl">Dagar</p>
                </td>
                <td className="w-3/12">
                  <h3 className="font-semibold text-9xl">{hoursLeft}</h3>
                  <p className="text-2xl">Timmar</p>
                </td>
                <td className="w-3/12">
                  <h3 className="font-semibold text-9xl">{minutesLeft}</h3>
                  <p className="text-2xl">Minuter</p>
                </td>
                <td className="w-3/12">
                  <h3 className="font-semibold text-9xl">{secondsLeft}</h3>
                  <p className="text-2xl">Sekunder</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="mb-10 countdownFooter">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="w-4/12 mx-auto" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      //If size is something else than set size, display error!
      <>
        <h1>Something went wrong, gridsize does not exist</h1>
      </>
    );
  }
};
