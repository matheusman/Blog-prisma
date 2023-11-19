import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/prismaClient";
import { IParagrafoCreate } from "../../interface/IParagrafoCreate";

export class ParagrafoCreateHandle {
    async execute ( { alt_paragrafo, id_text, image_paragrafo, text_paragrafo, title_paragrafo } : IParagrafoCreate ) {
        
        const textUnique = await prisma.text.findUnique( {
            where : {
                id_text
            }
        })

        if (!textUnique) throw new AppError("Crie um text id", 404)

        const text = await prisma.paragrafo.create({
            data : {
                text_paragrafo,
                title_paragrafo,
                alt_paragrafo,
                image_paragrafo,
                id_text,
            }
        })
        
        if (!text) throw new Error("O text não foi criado")

        return text;

    }
}