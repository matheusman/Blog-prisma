import { Request, Response } from "express";
import { TitleCreateHandle } from "./TitleCreateHandle";

export class TitleCreateHandleController {
    async handle (req : Request, res : Response) {
        const { title, subtitle } = req.body;
        if (!(title && subtitle && typeof title === 'string' && typeof subtitle === 'string')) throw new Error("Coloque string")
        const titleCreateHandle = new TitleCreateHandle()
        res.status(200).send(await titleCreateHandle.execute({ title, subtitle }))
    }

}