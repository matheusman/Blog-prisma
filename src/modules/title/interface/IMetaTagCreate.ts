import { Meta_tag } from "@prisma/client";

export interface IMetaTag {
    id_title : number;
    title_meta : string;
    description : string;
    keyword : string;
}