import { useMutation, useQuery } from "@tanstack/react-query";
import {
    ExpandedModel,
    Layout,
    LayoutItem,
    Slide,
    StrictRecordModel,
    Widget,
    usePocketbase,
} from "../../components/PocketbaseProvider";

/**
 * Custom hook for fetching slides data from the server.
 * @returns The data fetched from the server.
 */
export const useLayouts = () => {
    const pbClient = usePocketbase();

    const data = useQuery({
        queryKey: ["layouts"],
        queryFn: async () => {
            const layouts = await pbClient
                .collection("layouts")
                .getFullList();

            return layouts;
        },
    });

    return data;
};

export const useLayout = (id: string) => {
    const pbClient = usePocketbase();

    const data = useQuery({
        queryKey: ["layouts", id],
        queryFn: async () => {
            const layout = await pbClient.collection("layouts").getOne<Layout<{
                'layout_items(layout)': LayoutItem<Widget>[];
            }>>(id, {
                expand: 'layout_items(layout)'
            })

            return layout;
        },
    });

    return data;
}
