import { useState, useRef, useEffect } from "react";

export const SlideTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
const [time, setTime] = useState(0);
  const minutesInputRef = useRef();
  const secondsInputRef = useRef();
  const timerRef = useRef();

  const inputHandler = (e) => {
    const value = parseInt(e.target.value, 10) || 0;

    if (e.target.name === "minutes") {
      setMinutes(value);
    } else if (e.target.name === "seconds") {
      setSeconds(value);
    }
  };

  const convertToSeconds = () => {
    return minutes * 60 + seconds;
  };

  const handleSubmit = () => {
  setTime (convertToSeconds()); //this should be sent to pocketbase
  console.log(time + " seconds");
  }

  useEffect(() => {
    if (seconds>59) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
      minutesInputRef.current.value = minutes + 1;
      secondsInputRef.current.value = 0;
    }
    if (seconds<0) {
      if (minutes>0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
        minutesInputRef.current.value = minutes - 1;
        secondsInputRef.current.value = 59;
      }
      else{
        setSeconds(0);
        minutesInputRef.current.value = 0;
        secondsInputRef.current.value = 0;


      }
      
    }
    
  }, [seconds]);


 
  return (
    <>
      <div className="">
        
          <div className="justify-center items-center space-x-4 ring ring-purple-600 bg-zinc-600 rounded-lg grid grid-cols-3 ">
            <div>
              <span className="mx-10  text-white font-semibold">Minuter</span>

              <input
                className="rounded w-[20%] text-center"
                ref={minutesInputRef}
                type="number"
                placeholder={0}
                name="minutes"
                onChange={inputHandler}
              />
            </div>

            <div>
              <span className="mx-10 text-white font-semibold">Sekunder</span>

              <input
                className="rounded w-[20%] text-center "
                ref={secondsInputRef}
                type="number"
                placeholder={0}
                name="seconds"
                onChange={inputHandler}
              />
            </div>

            

            <span className=" text-white text-xl font-bold mx-10 " onClick={handleSubmit} >Bekräfta</span>
       
        </div>

        <div className="flex justify-center items-center mt-6 ring ring-purple-600 bg-zinc-600 rounded-lg shadow-xl">
          <h1 className="font-bold text-white text-xl">
            Slide time: {minutes} : {seconds < 10 ? `0${seconds}` : seconds}{" "}
          </h1>
        </div>
      </div>
    </>
  );
};
