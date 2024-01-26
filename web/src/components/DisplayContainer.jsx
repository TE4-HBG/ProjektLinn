import LunchWidget from "../widgets/LunchWidget";
import { DisplayFooter } from "./DisplayHeaderFooter";
import { DisplayHeader } from "./DisplayHeaderFooter";
import { AdminGrid } from "./Grid";

export const DisplayContainer = () => {
  return (
    <>
      <DisplayHeader />
      <p className="p-10 text-center bg-white "> Display Container </p>
      <DisplayFooter />
    </>
  );
};

export const EditContainer = () => {
  return (
    <>
      <p className="p-10 text-center"> Edit Container </p>
      {/* <AdminGrid slideId={"c8v6aslmcq12goj"} layoutId={"x8pxvylsuseyveq"} /> */}
    </>
  );
};
