import { Title } from "@prisma/client";
import { prisma } from "../../../../prisma/prismaClient";
import { ITitle } from "../../interface/ICreateTitleHandle";

export class TitleCreateHandle {
  async execute({ title, subtitle }: ITitle): Promise<Title> {
    const titlePrisma = await prisma.title.findUnique({
      where: {
        title,
      },
    });

    if (titlePrisma) {
      //error
    }

    return await prisma.title.create({
      data : {
        title,
        subtitle
      }
    });

  }
}
