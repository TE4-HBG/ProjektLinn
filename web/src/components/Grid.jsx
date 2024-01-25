/* eslint-disable react/prop-types */

import { useWidgets } from '../lib/hooks/useWidgets';

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
    // const pbClient = usePocketbase();

    // const { data } = useQuery({
    //     queryKey: ["slide", slideId],
    //     queryFn: async () => {
    //         const slide = await pbClient.collection("slides").getOne(slideId, {
    //             expand: "widgets(slide)",
    //         });

    //         const layoutItems = await pbClient
    //             .collection("layout_items")
    //             .getFullList({
    //                 filter: `layout = "${slide.layout}"`,
    //             });

    //         return {
    //             slide,
    //             layoutItems,
    //         };
    //     },
    // });

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
                            {index}
                            {/* <Widget type={slot.type} data={slot.data} /> */}
                        </div>
                    );
                })}

            {!data && <div>Loading...</div>}
        </Grid>
    );
};

// const widgets = {
//     'countdown': CountdownWidget
// }

// const Widget = ({ type, data }) => {
//     const component = widgets[type]
//     if (!component) return <div>Widget not found</div>
//     return component({ data })
// }
