export const AddWidgetButton = () => {
  const widgetsFromDB = [1, 2, 3, 4];

  return (
    <>
      <div className="grid grid-cols-3 gap-x-3 gap-y-3 grid-flow-row-dense">
        {widgetsFromDB.map((widget, index) => {
          return (
            <div
              key={index}
              className="bg-zinc-600 rounded-lg shadow-xl min-h-28 min-w-28 flex justify-center items-center hover:scale-105 duration-300"
            >
              <button className="flex items-center justify-center w-8 duration-300 outline-none cursor-pointer group hover:scale-150 duration-300">
                +
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
