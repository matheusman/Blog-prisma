import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/prismaClient";
import { IListCreate } from "../../interface/IListCreate";

export class ListCreateHandle {
    async execute ( { id_paragrafo, paragrafo_list, title_list } : IListCreate ) {
        
        const paragrafoUnique = await prisma.paragrafo.findUnique( {
            where : {
                id_paragrafo
            }
        })

        if (!paragrafoUnique) throw new AppError("Crie um paragrafo id", 404)

        const list = await prisma.list.create({
            data : {
                paragrafo_list,
                id_paragrafo,
                title_list : title_list ? title_list : null
            }
        })
        
        if (!list) throw new Error("O text não foi criado")

        return list;

    }
}