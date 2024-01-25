import "react";

const size = "1x2"; //Size for layout purposes. Later it should be getting this from the Database

export const Veckoevents = () => {
  if (size === "1x1") { //Widget layouts are returned depending on their size in grid
    return (
      <>
        <div className="bg-red-900 aspect-square">
          <h1 className="text-white text-[10vw] text-center mt-20 font-semibold">
            Vecka 39
          </h1>
          <h3 className="text-white text-[6vw] text-center">Måndag</h3>
          <p className="m-auto w-2/3 text-center text-9xl mt-[15%] text-white">
            <span className="font-semibold">NTI CUP. </span>Glöm inte anmäla er
            på Schoolsoft
          </p>
        </div>
      </>
    );
  } else if (size === "1x2") {
    return (
      <>
        <div className="bg-red-900 aspect-[1/2]">
          <h1 className="text-white text-[10vw] text-center mt-[5%]">
            Vecka 39
          </h1>
          <div className="flex justify-center h-[80%]">
            <table align="center" className="mt-20 text-white w-[90%]">
              <tr className="border border-white border-t-0 border-l-0 border-r-0 border-b-[5px]">
                <td className="w-1/3 py-[10%]">
                  <h3 className="text-9xl">Måndag</h3>
                  <p className="text-7xl">30/7</p>
                </td>
                <td>
                  <p className="text-8xl">
                    <span className="font-semibold">NTI CUP. </span>Glöm inte
                    anmäla er på Schoolsoft
                  </p>
                </td>
              </tr>
              <tr className="border border-white border-t-0 border-l-0 border-r-0 border-b-[5px]">
                <td className="w-1/3 py-[10%]">
                  <h3 className="text-9xl">Måndag</h3>
                  <p className="text-7xl">30/7</p>
                </td>
                <td>
                  <p className="text-8xl">
                    <span className="font-semibold">NTI CUP. </span>Glöm inte
                    anmäla er på Schoolsoft
                  </p>
                </td>
              </tr>
              <tr className="border border-white border-t-0 border-l-0 border-r-0 border-b-[5px]">
                <td className="w-1/3 py-[10%]">
                  <h3 className="text-9xl">Måndag</h3>
                  <p className="text-7xl">30/7</p>
                </td>
                <td>
                  <p className="text-8xl">
                    <span className="font-semibold">NTI CUP. </span>Glöm inte
                    anmäla er på Schoolsoft
                  </p>
                </td>
              </tr>
              <tr className="border border-white border-t-0 border-l-0 border-r-0 border-b-[5px]">
                <td className="w-1/3 py-[10%]">
                  <h3 className="text-9xl">Måndag</h3>
                  <p className="text-7xl">30/7</p>
                </td>
                <td>
                  <p className="text-8xl">
                    <span className="font-semibold">NTI CUP. </span>Glöm inte
                    anmäla er på Schoolsoft
                  </p>
                </td>
              </tr>
              <tr className="border border-white border-t-0 border-l-0 border-r-0 border-b-[5px]">
                <td className="w-1/3 py-[10%]">
                  <h3 className="text-9xl">Måndag</h3>
                  <p className="text-7xl">30/7</p>
                </td>
                <td>
                  <p className="text-8xl">
                    <span className="font-semibold">NTI CUP. </span>Glöm inte
                    anmäla er på Schoolsoft
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  } else if (size === "2x1") {
    return (
      <>
        <div className="bg-red-900 aspect-[2/1]">
          <h1 className="text-white text-9xl text-center mt-20">Vecka 39</h1>
          <hr className="bg-white w-1/3 m-auto mt-10 center h-1" />
          <table className="m-auto mt-20 text-white text-center w-[90%]">
            <tr>
              <td>
                <h3 className="text-6xl">Måndag</h3>
                <p className="text-4xl mt-5">27/3</p>
              </td>
              <td>
                <h3 className="text-6xl">Tisdag</h3>
                <p className="text-4xl mt-5">27/3</p>
              </td>
              <td>
                <h3 className="text-6xl">Onsdag</h3>
                <p className="text-4xl mt-5">27/3</p>
              </td>
              <td>
                <h3 className="text-6xl">Torsdag</h3>
                <p className="text-4xl mt-5">27/3</p>
              </td>
              <td>
                <h3 className="text-6xl">Fredag</h3>
                <p className="text-4xl mt-5">27/3</p>
              </td>
            </tr>
            <tr>
              <td className="px-10 py-20">
                <p className="text-4xl inline-block">
                  <span className="font-semibold">NTI Cup. </span>Glöm inte
                  anmäla er på Schoolsoft
                </p>
              </td>
              <td className="px-10">
                <p className="text-4xl inline-block">
                  <span className="font-semibold">NTI Cup. </span>Glöm inte
                  anmäla er på Schoolsoft
                </p>
              </td>
              <td className="px-10">
                <p className="text-4xl inline-block">
                  <span className="font-semibold">NTI Cup. </span>Glöm inte
                  anmäla er på Schoolsoft
                </p>
              </td>
              <td className="px-10">
                <p className="text-4xl inline-block">
                  <span className="font-semibold">NTI Cup. </span>Glöm inte
                  anmäla er på Schoolsoft
                </p>
              </td>
              <td className="px-10">
                <p className="text-4xl inline-block">
                  <span className="font-semibold">NTI Cup. </span>Glöm inte
                  anmäla er på Schoolsoft
                </p>
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  } else { //If size is something else than set size, display error!
    return (
      <>
        <h1>Something went wrong, gridsize does not exist</h1>
      </>
    );
  }
};
