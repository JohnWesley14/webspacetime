import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

   const redirectUrl = new URL('/', request.url)
   const cookieExpiresInSeconds = 60 * 60 * 24 * 30

   return NextResponse.redirect(redirectUrl,{
      headers:{
         'Set-Cookie': `token=; Path=/; max-age=0`, //Coloca qualquer token e a vida máxima de 0 segundos para deletar
      }
   })
}