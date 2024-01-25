import React, { useState, useEffect } from "react";
import ntiLogo from "../assets/ntiLogo.svg";

const size = "2x1"; //Size for layout purposes. Later it should be getting this from the Database

export const CountdownWidget = ({ data }) => {
  const { datetime } = data;
  const receivedDate = new Date(datetime);

  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    //Update time every 100ms
    const interval = setInterval(() => {
      getTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    //Calculate remaining time from date and format it.
    const dateNow = new Date();
    const timeDifference = receivedDate - dateNow;

    const calculatedDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const calculatedHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const calculatedMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const calculatedSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Format values to always have two digits
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
        <div className="countdownDiv aspect-square flex flex-col">
          <div className="countdownTopTextDiv flex justify-center mt-10">
            <h1 className="countdownTopText text-center text-8xl">Jul-Lan</h1>
          </div>
          <div className="countdownCountdownDiv flex-grow flex items-center justify-center">
            <div className="countdownNumbers">
              <p className="text-[13rem] font-bold">
                {daysLeft}:{hoursLeft}:{minutesLeft}:{secondsLeft}
              </p>
            </div>
          </div>
          <div className="countdownFooter mb-10">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="mx-auto w-8/12" />
          </div>
        </div>
      </>
    );
  } else if (size === "1x2") {
    return (
      <>
        <div className="countdownDiv aspect-[1/2] flex flex-col">
          <div className="countdownTopTextDiv flex justify-center mt-10">
            <h1 className="countdownTopText text-center text-8xl">Jul-Lan</h1>
          </div>
          <div className="countdownCountdownDiv flex-grow flex-col flex justify-center">
            <table className="mt-40">
              <tr>
                <td>
                  <h3 className="text-right text-[9rem] ml-[30%] font-bold">
                    {daysLeft}
                  </h3>
                </td>
                <td>
                  <p className="text-6xl ml-10">Dagar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    {hoursLeft}
                  </h3>
                </td>
                <td>
                  <p className="text-6xl ml-10">Timmar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    {minutesLeft}
                  </h3>
                </td>
                <td>
                  <p className="text-6xl ml-10">Minuter</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    {secondsLeft}
                  </h3>
                </td>
                <td>
                  <p className="text-6xl ml-10">Sekunder</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="countdownFooter mb-10">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="mx-auto w-8/12" />
          </div>
        </div>
      </>
    );
  } else if (size === "2x1") {
    return (
      <>
        <div className="countdownDiv aspect-[2/1] flex flex-col">
          <div className="countdownTopTextDiv flex justify-center mt-10">
            <h1 className="countdownTopText text-center text-8xl">Jul-Lan</h1>
          </div>
          <div className="countdownCountdownDiv flex-grow flex-col flex justify-center text-center">
            <table className="table-fixed ml-[10%] mr-[10%]">
              <tr>
                <td className="w-3/12">
                  <h3 className="text-9xl font-semibold">{daysLeft}</h3>
                  <p className="text-2xl">Dagar</p>
                </td>
                <td className="w-3/12">
                  <h3 className="text-9xl font-semibold">{hoursLeft}</h3>
                  <p className="text-2xl">Timmar</p>
                </td>
                <td className="w-3/12">
                  <h3 className="text-9xl font-semibold">{minutesLeft}</h3>
                  <p className="text-2xl">Minuter</p>
                </td>
                <td className="w-3/12">
                  <h3 className="text-9xl font-semibold">{secondsLeft}</h3>
                  <p className="text-2xl">Sekunder</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="countdownFooter mb-10">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="mx-auto w-4/12" />
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
