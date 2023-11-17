"use client";

import Image from "next/image";
import ftcadastro from "../../imgs/ftcadastro.png";
import logo from "../../imgs/Exemplo-de-Logotipo-6.jpg";
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
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-l from-blue-100 via-blue-300 to-blue-500">
      <div className=" flex shadow-2xl shadow-blue-950 w-10/12 h-4/6 bg-white ">
        <div className="flex w-1/2 h-full justify-center items-center pb-16 ">
          <div className="w-10/12">
            <div className="flex justify-center items-center pt-10 w-full h-1/5">
              <Image
                className=""
                src={logo}
                width={0}
                height={100}
                alt={"User avatar"}
                priority={true}
              />
            </div>
            <div className="">
              <h1 className="font-bold text-3xl text-center pb-8 w-full">Bem-vindo ao Pets For Home</h1>
              <div className="mb-16 pl-10 pr-10 w-full">
              <h1 className="float-left font-bold p-2 text-sm w-1/3 bg-zinc-300  text-center border rounded-l-lg border-gray-950">Seus dados</h1>
              <h1 className="float-left font-bold p-2 text-sm w-1/3 text-center border  border-gray-950 ">Endereço</h1>
              <h1 className="float-left font-bold p-2 text-sm w-1/3 text-center border rounded-r-lg border-gray-950">Finalizar cadastro</h1>
              </div>
              <form
                className="items-left justify-left"
                onSubmit={onSubmit}
              >
                <div className="grid w-full items-center pb-4">
                  <Input
                    className="p-6"
                    id="nome"
                    type="text"
                    placeholder="Digite seu Nome"
                  ></Input>
                </div>
                <div className="grid w-full items-center pb-4">
                  <Input
                    className="p-6"
                    id="cpf"
                    type="text"
                    placeholder="xxx.xxx.xxx-xx"
                  ></Input>
                </div>
                <div className="flex w-full items-center">
                  <div className=" w-1/2 pb-4 pr-4">
                    <Input
                      className="p-6"
                      id="telefone"
                      type="text"
                      placeholder="(xx) x xxxx-xxxx"
                    ></Input>
                  </div>
                  <div className="float-left w-1/2 pb-4 pl-4">
                    <Input
                      className="p-6"
                      id="dataNasc"
                      type="text"
                      placeholder="dd/mm/aaaa"
                    ></Input>
                  </div>
                </div>
                <div className="grid w-full items-center pb-4">
                  <Input
                    className="p-6"
                    id="email"
                    type="text"
                    placeholder="exemplo@exemplo.com"
                  ></Input>
                </div>
                <div className="items-center flex justify-center pt-3">
                  <ButtonDestructive name="Continuar" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center  rounded-l-[180px] bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800">
          <Image
            className="h-full ml-20"
            src={ftcadastro}
            width={0}
            height={582}
            alt={"User avatar"}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
