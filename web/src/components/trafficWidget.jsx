import { useEffect, useState } from "react";
import { useMisc } from "../lib/hooks/useMisc";

export const TrafficWidget = ({ data }) => {

    //get data from pocketbase and remake it to a const state
  const { divId, interval = 20000 } = data;
  const { data: departures } = useMisc("st-hbg-c-departures");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [slicedData, setSlicedData] = useState([]);



// this useEffect filters the data to a size and only shows the busses that are leaving after the current time
//also removes the unneccassary text from the direction
  useEffect(() => {
    if (departures && departures.value) {
      const slicedData = departures.value.slice(0, 500);
      const filteredData = slicedData
        .filter((bus) => bus.time > time)
        .map((bus) => {
          return {
            line: bus.line,
            // replace " (ANYTHING)" with "" to remove the " (ANYTHING)" from the direction
            direction: bus.direction.replace(/ \(.+\)/, ""),
            time: bus.time,
          };
        });
      setSlicedData(filteredData);
    }
  }, [departures, time]);



//different filter depending on what type of bus it is
  let busLines = [];

  let greenbus = slicedData.filter((bus) =>
    ["1", "2", "3", "4", "6", "7", "8", "22", "26"].includes(bus.line)
  );
  let yellowbus = slicedData.filter((bus) =>
    [
      "SX 10","10",
      "11", "218",
      "219","220",
      "250","251",
      "297","298",
      "299","506",
      "520",
    ].includes(bus.line)
  );
  let train = slicedData.filter(
    (bus) => !greenbus.includes(bus) && !yellowbus.includes(bus)
  );



  const [lineType, setLineType] = useState(greenbus);
  const [colorChange, setColorChange] = useState("bg-green-500");
  const [busType, setBusType] = useState("Stadsbuss");

  //creates the rotate effect on the bus widget

  useEffect(() => {
    const rotator = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      const color =
        colorChange === "bg-green-500"
          ? "bg-yellow-500"
          : colorChange === "bg-yellow-500"
          ? "bg-blue-500"
          : "bg-green-500";
      setColorChange(color);
      const bus =
        busType === "Stadsbuss"
          ? "Regionbuss"
          : busType === "Regionbuss"
          ? "Tåg"
          : "Stadsbuss";
      setBusType(bus);

      if (bus === "Stadsbuss") {
        setLineType(greenbus);
      } else if (bus === "Regionbuss") {
        setLineType(yellowbus);
      } else if (bus === "Tåg") {
        setLineType(train);
      }
    }, interval); // Update the current time every 5 seconds

    return () => {
      clearInterval(rotator);
    };
  }, [colorChange, busType, lineType]);


  
  //thischanges info in widget depending on what divId is sent in
  let Buss = "Regionbuss";
  let BussColor = "bg-yellow-500";

  if (divId === "stad") {
    BussColor = "bg-green-400";
    Buss = "Stadsbuss";
    busLines = greenbus;
  } else if (divId === "region") {
    BussColor = "bg-yellow-500";
    Buss = "Regionbuss";
    busLines = yellowbus;
  } else if (divId === "rotatera") {
    BussColor = colorChange;
    Buss = busType;
    busLines = lineType;
  } else if (divId === "tåg") {
    BussColor = "bg-indigo-400";
    Buss = "Tåg";
    busLines = train;
  } else {
    BussColor = "bg-red-500";
    Buss = "choose between 1-3 id";
  }

return (
    <div className="rounded-xl bg-[#D9D9D9] h-full overflow-hidden border-2  text-black  border-black text-xl">
        {/* Widget Header */}
        <div className="grid grid-flow-col overflow-hidden text-5xl">
            <div className="my-10 mx-6">
                <h2>Helsingborg C</h2>
                <div className=" font-bold">
                    <h1>{Buss}</h1>
                </div>
            </div>
            <div className=" flex items-center ">
                <div
                    className={
                        BussColor + " rounded-l-xl ml-[30%] h-[70%] aspect-[3/1] "
                    }
                ></div>
            </div>
        </div>

        {/* Bus Lines Table */}
        <table className="h-auto w-full text-center text-4xl">
            <thead className="">
                <tr className="rounded-xl bg-[#fef8f8] auto-col-auto h-full text-3xl ">
                    <th className="px-5 ">Linje</th>
                    <th className="px-5 text-left ">Destination</th>
                    <th className="w-1/6"> </th>
                    <th className="py-5 px-8 w-3/6 text-right">Avgår</th>
                </tr>
            </thead>
            <tbody>
                {/* Render each bus line */}
                {busLines.map((busLine, index) => {
                    if (slicedData.length === 0) {
                        return <div> Loading...</div>;
                    }
                    busLine.time = busLine.time.slice(0, 5);
                    return (
                        <>
                            <tr
                                className={
                                    index % 2 === 0 ? "bg-[#D9D9D9]" : "bg-[#fef8f8]  e"
                                }
                                key={busLine.line}
                            >
                                <td className="text-black font-semibold">
                                    <div
                                        className={
                                            BussColor + "  text-right pr-3 rounded-r-xl py-1"
                                        }
                                    >
                                        {busLine.line}
                                    </div>
                                </td>
                                <td className="text-left pl-5">{busLine.direction}</td>
                                <td></td>
                                <td className="py-6 pr-8 text-right">{busLine.time}</td>
                            </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
    </div>
);
            };

/**
  return (
    data &&
    data.value.map((dep, index) => {
      return (
        <>
              <pre>{JSON.stringify(dep, null, 4)}</pre>
              <p>{dep.direction}</p>
        </>
      );
    })
  );
 */

export default TrafficWidget;
