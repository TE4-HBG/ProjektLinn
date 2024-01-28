/* eslint-disable react/prop-types */

import { useLayout } from "../lib/hooks/useLayouts";
import { useWidgets } from "../lib/hooks/useWidgets";
import { Widget } from "./Widget";

// define a type for the props
/**
 * @typedef {Object} Slot
 * @property {number} colStart
 * @property {number} colEnd
 * @property {number} rowStart
 * @property {number} rowEnd
 */

/**
 * @typedef {Object} Props
 * //@property {Slot[]} slots
 * @property {string} slideId
 */

export const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(6,1fr)] grid-rows-[repeat(4,1fr)] flex-1 bg-pink-400">
      {children}
    </div>
  );
};

/**
 * Renders a layout grid component.
 *
 * @component
 * @param {Props} props The props for the component.
 * @returns {JSX.Element} The rendered grid component.
 */
export const SlideGrid = ({ slideId }) => {
  const { data } = useWidgets(slideId);

  return (
    <Grid>
      {data &&
        data.map((slot, index) => {
          return (
            <div
              key={index}
              className={`border border-black flex justify-center items-center bg-blue-400`}
              style={{
                gridColumnStart: slot.expand.slot.col_start,
                gridColumnEnd: slot.expand.slot.col_end,
                gridRowStart: slot.expand.slot.row_start,
                gridRowEnd: slot.expand.slot.row_end,
              }}
            >
              <Widget type={slot.type} data={slot.data} />
            </div>
          );
        })}

      {!data && <div>Loading...</div>}
    </Grid>
  );
};

export const AdminGrid = ({ slideId, layoutId }) => {
  const { data: widgets } = useWidgets(slideId);
  const { data: layout } = useLayout(layoutId);

  if (!widgets || !layout) return <div>Loading...</div>;

  return (
    <Grid>
      {layout.expand["layout_items(layout)"].map((slot, index) => {
        return (
          <div
            key={index}
            className={`border border-black flex justify-center items-center bg-blue-400`}
            style={{
              gridColumnStart: slot.col_start,
              gridColumnEnd: slot.col_end,
              gridRowStart: slot.row_start,
              gridRowEnd: slot.row_end,
            }}
          >
            {index}
          </div>
        );
      })}

      {widgets.map((widget, index) => {
        return (
          <div
            key={index}
            className={`border border-black flex justify-center items-center bg-blue-400`}
            style={{
              gridColumnStart: widget.expand.slot.col_start,
              gridColumnEnd: widget.expand.slot.col_end,
              gridRowStart: widget.expand.slot.row_start,
              gridRowEnd: widget.expand.slot.row_end,
            }}
          >
            <Widget type={widget.type} data={widget.data} />
          </div>
        );
      })}
    </Grid>
  );
};
