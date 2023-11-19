import { Request, Response } from "express";
import { checkInterface } from "../../../../interface/Generics";
import { AppError } from "../../../../error/AppError";
import { ParagrafoCreateHandle } from "./ParagrafoCreateHandle";
import { IParagrafoCreate } from "../../interface/IParagrafoCreate";

export class ParagrafoCreateHandleController {
    async handle (req : Request, res : Response) {
        
        const text = req.body;

        const paragrafoCreateHandle = new ParagrafoCreateHandle();

        if (!(checkInterface<IParagrafoCreate>(text, 'id_text', "alt_paragrafo", "image_paragrafo","text_paragrafo","title_paragrafo")))
         throw new AppError("Coloque todos os elementos dentro do elemento", 403)

        return await paragrafoCreateHandle.execute(text)
    }
    
}