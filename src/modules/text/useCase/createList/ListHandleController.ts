import { Request, Response } from "express";
import { checkInterface } from "../../../../interface/Generics";
import { AppError } from "../../../../error/AppError";
import { ListCreateHandle } from "./ListCreateHandle";
import { IListCreate } from "../../interface/IListCreate";

export class ListCreateHandleController {
    async handle (req : Request, res : Response) {
        
        const list = req.body;

        const metaTagCreateHandle = new ListCreateHandle();

        if (!(checkInterface<IListCreate>(list, 'id_paragrafo', 'paragrafo_list')))
         throw new AppError("Coloque todos os elementos dentro do elemento", 403)

        return await metaTagCreateHandle.execute(list)
    }
    
}