import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET() {
    const meets = await Prisma.meet.findMany();
    return NextResponse.json({meets});
}

export async function POST(request) {
    const body = await request.json();
    const { nome, cargo, valorHora, integrantes } = body;
    const custo = parseFloat(valorHora) * parseFloat(integrantes);
    const meet = await Prisma.meet.create({
        data: {
            nome,
            cargo,
            valorHora,
            integrantes,
            custo
        }
    });
    return NextResponse.json(meet);
}