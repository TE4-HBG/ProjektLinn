/* eslint-disable react/prop-types */
import { useDeleteSlide } from "../lib/hooks/useSlides";
import { PopUpTimer } from "../components/PopUpTimer";
import {
  Layout1SVG,
  Layout2SVG,
  Layout3SVG,
} from "../assets/layoutPreviews/layoutSVGs";
import { useState } from "react";

/*  */
export const SlideObject = ({ id }) => {
  const newDeleteFunc = useDeleteSlide();
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      {/*Actual item - SVG icon for layout */}
      <div
        className={`flex xl:max-h-52 max-h-44  aspect-[9/16] ${
          isDeleting && "brightness-50 "
        }`}
      >
        <Layout1SVG />
      </div>

      {/* Buttons - del + timer */}
      <div className="flex lg:flex-col gap-1 lg:mx-2 lg:my-0 my-2 justify-center items-center">
        {/* Delete button */}
        <button
          onClick={() => {
            setIsDeleting(true);
            newDeleteFunc.mutate(id, {});
          }}
          className="flex rounded-full w-10 h-10 duration-300 outline-none cursor-pointer"
          disabled={isDeleting}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-full w-10 h-10 duration-300 stroke-red-700 fill-none hover:fill-red-300 active:stroke-red-200 active:fill-red-600 active:duration-0"
          >
            <path
              d="M14.0293 8.1543L8.0293 14.1543M8.0293 8.1543L14.0293 14.1543M21.0293 11.1543C21.0293 16.6771 16.5521 21.1543 11.0293 21.1543C5.50645 21.1543 1.0293 16.6771 1.0293 11.1543C1.0293 5.63145 5.50645 1.1543 11.0293 1.1543C16.5521 1.1543 21.0293 5.63145 21.0293 11.1543Z"
              strokeWidth="1.5"
            />
            <path strokeWidth="1.5"></path>
            <path strokeWidth="1.5"></path>
          </svg>
        </button>

        {/* Timer button */}
        <PopUpTimer />
      </div>
    </>
  );
};
