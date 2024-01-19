/**
 * Provides a context and hook for accessing the PocketBase client.
 */
import PocketBase, { RecordService } from "pocketbase";
import { createContext, useContext } from "react";

/**
 * Represents a strict record model with required properties.
 */
export type StrictRecordModel<Expand extends Record<string, any> | undefined = undefined> = {
    id: string;
    created_at: string;
    updated_at: string;
    collectionId: string;
    collectionName: string;
    expand?: Expand;
};

/**
 * Represents a layout record model.
 */
export interface Layout extends StrictRecordModel {
    name: string;
}

/**
 * Represents a layout item record model.
 */
export interface LayoutItem extends StrictRecordModel {
    layout: string;
    row_start: number;
    row_end: number;
    col_start: number;
    col_end: number;
}

/**
 * Represents a slide record model.
 */
export interface Slide extends StrictRecordModel {
    layoutID: number;
    index: number;
    interval: number;
}

/**
 * Represents a widget record model.
 */
export interface Widget extends StrictRecordModel {
    slide: string;
    type: string;
    data: any;
}

/**
 * Represents a widget record model.
 */
export interface Misc extends StrictRecordModel {
    // slide: string;
    type: string;
    data: any;
    // Add your properties here for event
}

/**
 * Represents an expanded model with additional expand property.
 */
export type ExpandedModel<Model extends StrictRecordModel, Expand extends Record<string, StrictRecordModel >> = Omit<Model, 'expand'> & {
    expand: Expand;
};

/**
 * Represents a typed PocketBase client with collection methods.
 */
interface TypedPocketBase extends PocketBase {
    collection(idOrName: string): RecordService; // default fallback for any other collection
    collection(idOrName: "layouts"): RecordService<Layout>;
    collection(idOrName: "layout_items"): RecordService<LayoutItem>;
    collection(idOrName: "slides"): RecordService<Slide>;
    collection(idOrName: "widgets"): RecordService<Widget>;
    collection(idOrName: "misc"): RecordService<Misc>;
}

const pocketBaseClient = new PocketBase(
    "https://projekt-linn.pockethost.io"
) as TypedPocketBase;

/**
 * Context for accessing the PocketBase client.
 */
export const PocketbaseContext = createContext(pocketBaseClient);

/**
 * Hook for accessing the PocketBase client from the context.
 */
export const usePocketbase = () => {
    return useContext(PocketbaseContext);
};

/**
 * Provider component for the PocketBase client.
 * @param children - The child components.
 */
export const PocketbaseProvider = ({ children }) => {
    return (
        <PocketbaseContext.Provider value={pocketBaseClient}>
            {children}
        </PocketbaseContext.Provider>
    );
};
