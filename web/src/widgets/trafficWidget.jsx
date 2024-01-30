import React, { useEffect, useState } from "react";

export let divId;

const TrafficWidget = ({ divId }) => {
  let busLines = [
    { line: "1", destination: "Ramlösa", departure: "2" },
    { line: "2", destination: "Helsingborg", departure: "5" },
    { line: "3", destination: "Ödåkra", departure: "10" },
    { line: "4", destination: "Höganäs", departure: "12" },
    { line: "5", destination: "Helsingborg", departure: "15" },
    { line: "6", destination: "Ramlösa", departure: "20" },
    { line: "7", destination: "Helsingborg", departure: "25" },
    { line: "8", destination: "Ödåkra", departure: "30" },
    { line: "9", destination: "Höganäs", departure: "35" },
    { line: "10", destination: "Helsingborg", departure: "40" },
    { line: "11", destination: "Ramlösa", departure: "45" },
    { line: "12", destination: "Helsingborg", departure: "50" },
    { line: "13", destination: "Ödåkra", departure: "55" },
    { line: "14", destination: "Höganäs", departure: "60" },
    { line: "15", destination: "Helsingborg", departure: "65" },
    { line: "16", destination: "Ramlösa", departure: "70" },
    { line: "17", destination: "Helsingborg", departure: "75" },
    { line: "18", destination: "Ödåkra", departure: "80" },
    { line: "19", destination: "Höganäs", departure: "85" },
    { line: "20", destination: "Helsingborg", departure: "90" },
    { line: "21", destination: "Ramlösa", departure: "95" },
    { line: "22", destination: "Helsingborg", departure: "100" },
    { line: "23", destination: "Ödåkra", departure: "105" },
    { line: "24", destination: "Höganäs", departure: "110" },
    { line: "25", destination: "Helsingborg", departure: "115" },
    { line: "223", destination: "Ramlösa", departure: "120" },
  ];

  var greenbus = busLines.filter((busLine) =>
    ["4", "7", "10", "223"].includes(busLine.line)
  );

  var yellowbus = busLines.filter((busLine) =>
    ["9", "11", "12", "26"].includes(busLine.line)
  );

  const [lineType, setLineType] = useState(greenbus);
  const [colorChange, setColorChange] = useState("bg-green-500");
  const [busType, setBusType] = useState("Stadsbuss");

  //creates the rotate effect on the bus widget
  useEffect(() => {
    const interval = setInterval(() => {
      const color =
        colorChange === "bg-green-500" ? "bg-yellow-500" : "bg-green-500";
      setColorChange(color);
      const bus = busType === "Stadsbuss" ? "Regionbuss" : "Stadsbuss";
      setBusType(bus);

      if (bus === "Stadsbuss") {
        setLineType(greenbus);
      } else if (bus === "Regionbuss") {
        setLineType(yellowbus);
      }
      //setLineType(line);
    }, 5000); // Update the current time every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [colorChange, busType, lineType]);

  //thischanges info in widget depending on what divId is sent in
  var Buss = "Regionbuss";
  var BussColor = "bg-yellow-500";

  var divId = divId;

  if (divId === "stad") {
    BussColor = "bg-green-500";
    Buss = "Stadsbuss";
    busLines = greenbus;
  } else if (divId === "region") {
    BussColor = "bg-yellow-500";
    Buss = "Regionbuss";
    busLines = yellowbus;
  } else if (divId === "rotate") {
    BussColor = colorChange;
    Buss = busType;
    busLines = lineType;
  } else {
    BussColor = "bg-red-500";
    Buss = "choose between 1-3 id";
  }

  return (
    <div className="rounded-xl bg-[#D9D9D9] h-full overflow-hidden border-2  text-black  border-black text-xl">
      <div className="grid grid-flow-col overflow-hidden text-5xl">
        <div className="my-10 mx-6">
          <h2>Helsingborg C</h2>
          <div className=" font-bold">
            <h1>{Buss}</h1>
          </div>
        </div>
      </div>

      <table className="h-auto w-full text-center text-4xl">
        <thead className="rounded-">
          <tr className="rounded-xl bg-[#fef8f8] auto-col-auto h-full text-3xl ">
            <th className="px-5 ">Linje</th>
            <th className="px-5 text-left ">Destination</th>
            <th className="w-1/6"> </th>

            <th className="py-5 px-8 w-3/6 text-right">Avgår om</th>
          </tr>
        </thead>
        <tbody>
          {busLines.map((busLine, index) => (
            <tr
              className={index % 2 === 0 ? "bg-[#D9D9D9]" : "bg-[#fef8f8]  e"}
              key={busLine.line}
            >
              <td className="text-white">
                <div
                  className={
                    BussColor + " w-[70%] text-right pr-3 rounded-r-xl"
                  }
                >
                  {busLine.line}
                </div>
              </td>
              <td className="text-left pl-5">{busLine.destination}</td>
              <td></td>
              <td className="py-3 px-14 text-right">{busLine.departure} min</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrafficWidget;
