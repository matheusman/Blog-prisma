import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/prismaClient";
import { ITextCreate } from "../../interface/ITextCreate";


export class TextCreateHandle {
    async execute ( { id_title } : ITextCreate ) {
        const idUnique = await prisma.title.findUnique( {
            where : {
                id_title
            }
        })
        if (!idUnique) throw new AppError("Crie um titulo primeiro", 403)

        const text = await prisma.text.create( {
            data : {
                id_title
            }   
        })


        if (!text) throw new Error("Banco não conseguir salvar o resultado")
        
        return text;

    }
}