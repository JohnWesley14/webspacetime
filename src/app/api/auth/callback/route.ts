import { NextRequest, NextResponse } from "next/server";
import { api } from "@/components/lib/api";

export async function GET(request: NextRequest){
   const { searchParams } = new URL(request.url) //searchParams são os parâmetros que são passados na URL, no caso o código
   const code = searchParams.get('code') //Salvar o código em uma variável

   const redirectTo = request.cookies.get('redirectTo')?.value
   
   const registerResponse = await api.post('/register', {
      code,
   })
   
   
   const { token } = registerResponse.data

   const redirectUrl = redirectTo ?? new URL('/', request.url)

   const cookieExpiresInSeconds = 60 * 60 * 24 * 30

   return NextResponse.redirect(redirectUrl,{
      headers:{
         'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`, //Salvando o token em um cookie e o Path salva em todas as rotas
      }
   })
   // Tá dando esse erro de Econrefused, mas eu consegui tirar ele e colocar outrokk 
}