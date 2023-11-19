import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/prismaClient";
import { IMetaTag } from "../../interface/IMetaTagCreate";

export class MetaTagCreateHandle {
    async execute ( { description, keyword, id_title, title_meta } : IMetaTag ) {

        const idUnique = await prisma.meta_tag.findUnique( {
            where : {
                id_title_title_meta : {
                    id_title,
                    title_meta
                }
            }
        })

        if (!idUnique) throw new AppError("Elemento ja existe para ser criado!", 403)

        const metaTag = await prisma.meta_tag.create( {
            data : {
                description,
                keyword,
                id_title,
                title_meta
            }   
        })

        if (!metaTag) throw new Error("Banco não conseguir salvar o resultado")
        
        return metaTag;

    }
}