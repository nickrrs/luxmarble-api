import { PrismaClient, Section } from "@prisma/client";
import { SectionSavePayload, SectionUpdatePayload } from "../interface/section-interface";

export class SectionRepository{
    constructor(private readonly client: PrismaClient) {}

    public all(): Promise<Array<Section>> {
        return this.client.section.findMany({})
      }

    public get(id: number): Promise<Section | null> {
        return this.client.section.findFirst({
          where: { id },
        })
    }

    public async saveSection(payload: SectionSavePayload): Promise<Section>{
        return this.client.section.create({
            data: payload
        })
    }

    public async updateSection(id: number, payload: SectionUpdatePayload): Promise<Section>{
        return this.client.section.update({
            where: { id },
            data: payload,
          })
    }

    public deleteSection(id: number): Promise<Section> {
        return this.client.section.delete({
          where: { id },
        })
      }
}