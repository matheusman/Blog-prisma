import { prisma } from "../../../../prisma/prismaClient";
import { IPath_title_img_Create } from "../../interface/IPath_title_img_Create";

export class PathTitleImgCreateHandle {
  async execute({ alt_title, image_title, id_title }: IPath_title_img_Create) {
    
    const pathTitle = await prisma.path_title_img.create( {
        data : {
            alt_title,
            image_title,
            id_title
        }
    })

    return pathTitle
  }
}
