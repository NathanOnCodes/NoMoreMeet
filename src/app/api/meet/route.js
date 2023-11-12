import { NextResponse } from "next/server";
function GET(request) {

    if(!request.ok) throw new Error('Erro na requisição');

    return NextResponse.json({
        message: "Hello World"
    })
}