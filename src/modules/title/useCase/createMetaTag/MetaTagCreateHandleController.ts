import { Request, Response } from "express";
import { MetaTagCreateHandle } from "./MetaTagCreateHandle";
import { IMetaTag } from "../../interface/IMetaTagCreate";
import { checkInterface } from "../../../../interface/Generics";
import { AppError } from "../../../../error/AppError";

class MetaTagCreateHandleController {
    async execute (req : Request, res : Response) {
        
        const meta_tag = req.body;

        const metaTagCreateHandle = new MetaTagCreateHandle();

        if (!(checkInterface<IMetaTag>(meta_tag, 'description', 'id_title', 'keyword', 'title_meta')))
         throw new AppError("Coloque todos os elementos, description, id_title, keyword, title_meta", 403)

        return await metaTagCreateHandle.execute(meta_tag)
    }
    
}