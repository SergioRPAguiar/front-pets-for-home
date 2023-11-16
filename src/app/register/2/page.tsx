"use client";

import Image from "next/image";
import cat from "../../imgs/gato1.png";
import { ButtonDestructive } from "@/app/components/ui/button/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react"
import { useRouter } from "next/navigation";



export default function DadosForm() {

  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [uf, setUf] = useState("");

  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/register/enderecoform");
    console.log('Register');
}

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      <div className="">
        <Image
          className="rounded-xl  mr-1 border-purple-700 border-4"
          src={cat}
          width={0}
          height={447}
          alt={"User avatar"}
          priority={true}
        />
      </div>
      <div className="w-full h-1/2 shadow-xl p-4 bg-white rounded-xl text-cyan-800 max-w-sm border-purple-700 border-4">
        <div className="pb-16 w-full items-center">
          <h1 className="float-left w-1/3 text-sm text-center">Seus Dados</h1>
          <h1 className="float-left w-1/3 text-center text-purple-600 font-bold underline underline-offset-8">Endereço</h1>
          <h1 className="float-left w-1/3 text-sm text-center">Finalizar Cadastro</h1>
        </div>
        <form className="items-center justify-center w-full" onSubmit={onSubmit}>
          <div className="grid w-full items-center gap-1.5 pb-6">
            <Label htmlFor="cep">Cep</Label>
            <Input id="cep" type="text" placeholder="xxxxx-xxx"></Input>
          </div>
          <div className="grid w-full items-center gap-1.5 pb-6">
            <Label htmlFor="cidade">Cidade:</Label>
            <Input id="cidade" type="text" placeholder="Cidade"></Input>
          </div>
          <div className="flex w-full items-center">
          <div className=" w-1/2 gap-1.5 pb-6 pr-4">
            <Label htmlFor="estado">Estado:</Label>
            <Input id="Estado" type="text" placeholder="Estado"></Input>
          </div>
          <div className="w-1/2 gap-1.5 pl-4 pb-6">
            <Label htmlFor="uf">UF</Label>
            <Input id="uf" type="text" placeholder="UF"></Input>
          </div>
          </div>
          <div className="items-center flex justify-center">
            <ButtonDestructive name="Continuar" />
          </div>
        </form>
      </div>
    </div>
  );
}
