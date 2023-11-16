import { prisma } from "@/libs/prisma"

export async function createMeet(arg){
    return await prisma.meet.create({
        data: arg
    })
}

export async function loadMeets(){
    return await prisma.meet.findMany()
}

export async function deleteMeet(id){
    return await prisma.meet.delete({
        where: {
            id
        }
    })
}