import { useEffect, useState } from "react";
import { EditContainer } from "../components/DisplayContainer"; // Gemensamma container som används för att visa och editera slides
import { PopUpTimer } from "../components/PopUpTimer"; // Fixa styling på det och sägg till att den ska bete sig som en popup
import { SlideObject } from "../components/SlideObject"; // Component som representerar en slide
import { useSlides } from "../lib/hooks/useSlides"; // Backend hook
import { useNewSlide } from "../lib/hooks/useSlides"; // Backned hook
import {
  Layout1SVG,
  Layout2SVG,
  Layout3SVG,
} from "../assets/layoutPreviews/layoutSVGs";

export const AdminPage = () => {
  const newSlideMutation = useNewSlide();
  const { data: slides } = useSlides();
  const [layoutSelectToggle, setlayoutSelectToggle] = useState(false);

  async function addSlide() {
    newSlideMutation.mutate({
      layout: null,
      index: 0,
      interval: 30,
    });
  }

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] p-6 justify-between">
        {/* item-1 - Slidelist*/}
        <div
          id="SlideList"
          className="flex flex-col w-[15vw] h-full justify-center"
        >
          {/* Slides - card + buttons (del, timer)*/}
          <div id="SlideLayouts" className="overflow-y-scroll">
            {slides && slides.length > 0 ? (
              slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex my-4 lg:flex-row flex-col-reverse justify-center "
                >
                  <SlideObject id={slide.id} />
                </div>
              ))
            ) : (
              <div className="mx-auto font-bold "> No Slides.. </div>
            )}
          </div>

          {/* Add Slide Button. Sägg till att hitta ett sätt där man kan centrera add slide knappen när man ändrar res*/}
          <div
            id="AddSlideButton"
            className=" mb-6 w-[15vw] pr-10 bg-white flex justify-evenly"
          >
            <button
              title="Add New"
              className="flex items-center justify-center w-full h-10 my-2 duration-300 outline-none cursor-pointer group hover:rotate-90"
              onClick={() => {
                setlayoutSelectToggle(!layoutSelectToggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 duration-300 stroke-purple-400 fill-none group-hover:fill-purple-200 group-active:stroke-purple-200 group-active:fill-purple-600 group-active:duration-0"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  strokeWidth="1.5"
                ></path>
                <path d="M8 12H16" strokeWidth="1.5"></path>
                <path d="M12 16V8" strokeWidth="1.5"></path>
              </svg>
            </button>
          </div>
        </div>

        {/*item-2 - Preview + Edit*/}
        <div className="border-4 xl:w-[30vw] w-[40vw] max-h-full aspect-[9/16] my-auto rounded-[12px]">
          <EditContainer />
        </div>

        {/* item-3 - Widget Editor */}
        <div className="xl:w-[40vw] w-[30vw] border"> Widgets = defult </div>

        {/* Layout selector popup */}
        {layoutSelectToggle && (
          <div className="flex justify-center items-center z-10 fixed top-6 right-6 xl:w-[40vw] w-[30vw] h-[calc(100%-theme(space.12))] bg-white">
            <div className="grid gap-4 2xl:grid-cols-3 lg:grid-cols-3 grid-cols-2">
              <button
                onClick={() => addSlide()}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout1SVG />
              </button>
              <button
                onClick={() => addSlide()}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout2SVG />
              </button>
              <button
                onClick={() => addSlide()}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout3SVG />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

/**
 * @type {import('react-router-dom').RouteObject}
 */
// eslint-disable-next-line react-refresh/only-export-components
export const adminRoute = {
  path: "/admin",
  element: <AdminPage />,
};
