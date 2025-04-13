import { Metadata } from "../types/metadata.type";

export type Info = {
    records: any[],
    metadata: Metadata,
    filename: string,
    subject: string,
    pathLogo?: string,
}