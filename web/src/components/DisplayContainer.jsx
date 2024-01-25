import { DisplayFooter } from "./DisplayHeaderFooter";
import { DisplayHeader } from "./DisplayHeaderFooter";

export const DisplayContainer = () => {
  return (
    <>
      <DisplayHeader />
      <p className="container p-10 text-center bg-white "> Display Container </p>
      <DisplayFooter />
    </>
  );
};


export const EditContainer = () => {
  return (
    <>
      <div className="container mx-auto px-4 border-4 w-[30vw]">
        <p className="container p-10 text-center"> Edit Container </p>
      </div>
    </>
  );
};
