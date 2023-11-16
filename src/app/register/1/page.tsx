"use client";

import Image from "next/image";
import cat from "../../imgs/gato1.png";
import { ButtonDestructive } from "@/app/components/ui/button/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DadosForm() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/register/2");
    console.log("Register");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      <div className="">
        <Image
          className="rounded-xl mr-1 border-purple-700 border-4"
          src={cat}
          width={0}
          height={487}
          alt={"User avatar"}
          priority={true}
        />
      </div>
      <div className="shadow-xl w-4/12 p-4 bg-white rounded-xl text-cyan-800 border-purple-700 border-4">
        <div className="pb-16 w-full items-center">
          <h1 className="float-left w-1/3 text-center text-purple-600 font-bold underline underline-offset-8">
            Seus Dados
          </h1>
          <h1 className="float-left w-1/3 text-sm text-center">Endereço</h1>
          <h1 className="float-left w-1/3 text-sm text-center">Finalizar Cadastro</h1>
        </div>
        <form className="items-center justify-center w-full" onSubmit={onSubmit}>
          <div className="grid w-full items-center gap-1.5 pb-6">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" type="text" placeholder="Digite seu Nome"></Input>
          </div>
          <div className="grid w-full items-center gap-1.5 pb-6">
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" type="text" placeholder="xxx.xxx.xxx-xx"></Input>
          </div>
          <div className="flex w-full items-center">
            <div className=" w-1/2 gap-1.5 pb-6 pr-4">
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                type="text"
                placeholder="(xx) x xxxx-xxxx"
              ></Input>
            </div>
            <div className="float-left w-1/2 gap-1.5 pb-6 pl-4">
              <Label htmlFor="dataNasc">Data de nascimento</Label>
              <Input id="dataNasc" type="text" placeholder="dd/mm/aaaa"></Input>
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5 pb-6">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="text"
              placeholder="exemplo@exemplo.com"
            ></Input>
          </div>
          <div className="items-center flex justify-center">
            <ButtonDestructive name="Continuar" />
          </div>
        </form>
      </div>
    </div>
  );
}

