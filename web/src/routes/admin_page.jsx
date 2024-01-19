import { useState } from "react";
import { AddWidgetButton } from "../components/AddWidgetButton";
import { EditContainer } from "../components/DisplayContainer";
import { SlideTimer } from "../components/SlideTimer.jsx";
import { SlideObject } from "../components/SlideObject";
import { useSlides } from "../lib/hooks/useSlides";
import { useNewSlide } from "../lib/hooks/useSlides";

// NoJustify = "flex flex-col w-[15vw] h-full pb-16"
// YesJusyify = "flex flex-col w-[15vw] h-full pb-16 justify-center"
// get element hight
// if element hight > 100% = {NoJustify}
// else {YesJustify}

export const AdminPage = () => {
  const newSlideMutation = useNewSlide();
  const { data: slides } = useSlides();
  const [layoutSelectToggle, setlayoutSelectToggle] = useState(false);

  async function addSlide(id) {
    newSlideMutation.mutate(
      {
        layoutID: id,
        index: 0,
        interval: 30,
      },
      {
        onSuccess: () => {
          location.reload();
        },
      }
    );
  }

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] p-6 justify-between">
        {/* Slide list */}
        <div className="flex flex-col w-[15vw] h-full pb-16">
          <div className="flex flex-col overflow-y-auto">
            {/* <p className="flex justify-center items-center">
              <SlideTimer />
            </p> */}

            {slides && slides.length > 0 ? (
              slides.map((slide) => (
                <div key={slide.id} className="grid py-4 ">
                  <SlideObject id={slide.id} layout={slide.layoutID} />
                </div>
              ))
            ) : (
              <p> No Slides.. </p>
            )}
          </div>

          {/* Add Slide Button */}
          <div className="absolute bottom-6 w-[15vw] bg-white flex justify-center">
            <button
              title="Add New"
              className="flex items-center justify-center w-10 h-10 my-2 duration-300 outline-none cursor-pointer group hover:rotate-90"
              onClick={() => {
                setlayoutSelectToggle(!layoutSelectToggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="duration-300 stroke-purple-400 fill-none group-hover:fill-purple-800 group-active:stroke-purple-200 group-active:fill-purple-600 group-active:duration-0"
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

        {/* Preview + Edit*/}
        <div className="px-4 border-4 w-[35vw] max-h-full aspect-[9/16] my-auto rounded-[12px]">
          <EditContainer />
        </div>

        {/* Layout selector popup */}
        {layoutSelectToggle && (
          <div className="grid z-10 fixed top-6 right-6 w-[30vw] h-[calc(100%-theme(space.12))] bg-black text-white rounded-[12px]">
            <button onClick={() => addSlide(0)}> Layout bild </button>
            <button onClick={() => addSlide(1)}> Layout bild </button>
            <button onClick={() => addSlide(2)}> Layout bild </button>
          </div>
        )}

        <AddWidgetButton />
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
