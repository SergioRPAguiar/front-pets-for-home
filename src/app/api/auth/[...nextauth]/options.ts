import { NextAuthOptions } from 'next-auth';

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        // GoogleProvider({
        //   }),
        CredentialsProvider({
            name: "Credentials",
                credentials: {
                    email: {label: "email", type: "email", placeholder: "your email" },
                    password: { label: "password", type: "password" }
                },
            async authorize(credentials){
                const user = { id: "1", name: "J Smith", email: "test@example.com", password: '123'}

                if(user?.email === credentials?.email &&
                user?.password === credentials?.password){
                    return user
                     } 
                return null
                     
            }
            })
    ],
    
}