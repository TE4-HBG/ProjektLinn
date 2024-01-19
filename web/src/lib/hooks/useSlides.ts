import { useMutation, useQuery } from "@tanstack/react-query";
import {
    ExpandedModel,
    LayoutItem,
    Slide,
    StrictRecordModel,
    Widget,
    usePocketbase,
} from "../../components/PocketbaseProvider";

/**
 * Custom hook for fetching slides data.
 * @returns {QueryResult} The result of the query.
 */

export const useSlides = () => {
    const pbClient = usePocketbase();

    const data = useQuery({
        queryKey: ["slides"],
        queryFn: async () => {
            const slides = await pbClient
                .collection("slides")
                .getFullList();

            return slides;
        },
    });

    return data;
};

/**
 * Custom hook for creating a new slide.
 * @returns The mutation data for creating a new slide.
 */

export const useNewSlide = () => {
    const pbClient = usePocketbase();

    const data = useMutation({
        mutationFn: async (slide: Omit<Slide, keyof StrictRecordModel> ) => {
            const newSlide = await pbClient
                .collection("slides")
                .create(slide);

            return newSlide;
        },
    });
    return data;
}

export const useDeleteSlide = () => {
    const pbClient = usePocketbase();

    const data = useMutation({
        mutationFn: async (slideID: string) => {
            await pbClient
                .collection('slides')
                .delete(slideID);
        },
    });

    return data;
};