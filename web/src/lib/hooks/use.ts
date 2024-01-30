import { useQuery } from "@tanstack/react-query";
import {
    ExpandedModel,
    LayoutItem,
    Widget,
    usePocketbase,
} from "../../components/PocketbaseProvider";

/**
 * Custom hook that fetches and returns the widgets for a specific slide.
 * @param slideId The ID of the slide.
 * @returns The data containing the widgets for the slide.
 */

export const useWidgets = (slideId: string) => {
    const pbClient = usePocketbase();

    const data = useQuery({
        queryKey: ["widgets", slideId],
        queryFn: async () => {
            const widgets = await pbClient
                .collection("widgets")
                .getFullList<ExpandedModel<Widget, {
                    slot: LayoutItem;
                }>>({
                    expand: "slot",
                    filter: `slide = "${slideId}"`,
                });

            return widgets;
        },
    });

    return data;
};
