import { useQuery } from "@tanstack/react-query";
import {
    usePocketbase
} from "../../components/PocketbaseProvider";

/**
 * @param miscName
 * @returns
 */
export const useMisc = (miscName: string) => {
    const pbClient = usePocketbase();

    const data = useQuery({
        queryKey: ["misc", miscName],
        queryFn: async () => {
            const skanetrafiken = await pbClient
                .collection("misc")
                .getFirstListItem(`name = "${miscName}"`)

            return skanetrafiken;
        },
    });

    return data;
};

// 1. create table in pocketbase
// 2. Update pocketbaseProvider Event interface on line 57 to have the correct fields
// 3. update this hook to fetch data from pocketbase from the table
// 4. Change or remove filter depending on how you want to fetch the data
// 5. Update the query key to be for events

// const { data } = useMisc(miscName);
// data.map((----, index) =>
// ----.data