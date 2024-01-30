import { useState } from "react";
import { SlideTimer } from "../components/SlideTimer";

// Måste importera timer component
// fixa styling på popup
export const PopUpTimer = () => {
  const [popUpTimer, setPopUpTimer] = useState(false);

  const togglePopUp = () => {
    setPopUpTimer(!popUpTimer);
  };

  const closePopUp = () => {
    setPopUpTimer(false);
  };

  if (popUpTimer) {
    document.body.classList.add("active-TogglePopUptimer");
  } else {
    document.body.classList.remove("active-TogglePopUptimer");
  }

  return (
    <>
      {/* Styling till timer knapp */}
      <div className="z-50 ">
        <button
          onClick={togglePopUp}
          className="flex rounded-full w-10 h-10 duration-300 outline-none cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-full w-10 h-10 duration-300 stroke-green-700 fill-none hover:fill-green-300 active:stroke-green-200 active:fill-green-600 active:duration-0"
          >
            <path
              d="M11.5117 1.99512C6.54116 1.99512 2.51172 6.02455 2.51172 10.9951C2.51172 15.9657 6.54116 19.9951 11.5117 19.9951C16.4823 19.9951 20.5117 15.9657 20.5117 10.9951C20.5117 6.02455 16.4823 1.99512 11.5117 1.99512ZM0.511719 10.9951C0.511719 4.91998 5.43659 -0.00488281 11.5117 -0.00488281C17.5869 -0.00488281 22.5117 4.91998 22.5117 10.9951C22.5117 17.0702 17.5869 21.9951 11.5117 21.9951C5.43659 21.9951 0.511719 17.0702 0.511719 10.9951ZM11.5117 3.99512C12.064 3.99512 12.5117 4.44283 12.5117 4.99512L11.5 11L15.9589 12.1007C16.4529 12.3477 16.6531 12.9484 16.4061 13.4423C16.1592 13.9363 15.5585 14.1365 15.0645 13.8895L11.0645 11.8895C10.7257 11.7202 10.5117 11.3739 10.5117 10.9951V4.99512C10.5117 4.44283 10.9594 3.99512 11.5117 3.99512Z"
              strokeWidth="1"
            />
          </svg>
        </button>

        {popUpTimer && (
          <div className="bg-red-500" onClick={closePopUp}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="hover:scale-1.5"
            >
              <SlideTimer />

              <button onClick={closePopUp} className="ml-28 ring ring-pinq-500">
                Close!
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
