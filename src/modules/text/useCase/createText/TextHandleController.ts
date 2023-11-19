import { Request, Response } from "express";
import { checkInterface } from "../../../../interface/Generics";
import { AppError } from "../../../../error/AppError";
import { TextCreateHandle } from "./TextCreateHandle";
import { ITextCreate } from "../../interface/ITextCreate";

export class TextCreateHandleController {
    async handle (req : Request, res : Response) {
        
        const text = req.body;

        const metaTagCreateHandle = new TextCreateHandle();

        if (!(checkInterface<ITextCreate>(text, 'id_title')))
         throw new AppError("Coloque todos os elementos, description, id_title, keyword, title_meta", 403)

        return await metaTagCreateHandle.execute(text)
    }
    
}