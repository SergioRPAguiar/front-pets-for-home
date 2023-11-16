// 'use client'

// import { useForm } from "react-hook-form"
// import { number, z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useCallback } from 'react'
// import axios from "axios"
// import { useEffect } from 'react'
// import { zipCodeMask } from 'constants/masks'

// const schemaForm = z.object({
//     address: z.object({
//         zipCode: z.string().min(9, 'Por favor, informe um CEP válido'),
//         street: z.string().min(1, 'Por favor, informe uma rua válida'),
//         number: z.string().min(1, 'Por favor, informe um numero válido'),
//         distric: z.string().min(1, 'Por favor, informe um bairro válido'),
//         state: z.string().min(1, 'Por favor, informe um estado válido'),
//         city: z.string().min(1, 'Por favor, informe uma cidade válida'),
//         complement: z.string()
//     })
// }).transform((field) => ({
//     address: {
//         zipCode: field.address.zipCode,
//         street: field.address.street,
//         number: field.address.number,
//         distric: field.address.distric,
//         state: field.address.state,
//         city: field.address.city,
//         complement: field.address.complement
//     }
// }))

// type FormProps = z.infer<typeof schemaForm>

// export default function Cep(){
//     const { handleSubmit,
//         register,
//         watch,
//         setValue,
//         formState:{ errors } } = useForm<FormProps>({
//         criteriaMode: 'all',
//         mode: 'all',
//         resolver: zodResolver(schemaForm),
//         defaultValues: {
//             address: {
//                 zipCode: '',
//                 street: '',
//                 number: '',
//                 distric: '',
//                 state: '',
//                 city: '',
//                 complement: '',

//             }
//         }
//     });

//     const zipCode = watch('address.zipCode')

//     const handleFormSubmit = (data: FormProps) => {
//         console.log(data)
//     }

//     const handleFetchAddres = useCallback(async (zipCode: string) => {
//         const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}}/json/`)

//         console.log(data)
//     }, []);

//     useEffect(() => {
//         setValue('address.zipCode', zipCodeMask(zipCode))    

//         if(zipCode.length !== 9) return;

//         handleFetchAddres(zipCode)
//     }, [handleFetchAddres, setValue, zipCode])
    
//     console.log(errors)

//     return (
//         <div>
//             <h2>Cep</h2>

//             <form onSubmit={handleSubmit(handleFormSubmit)}>
//                 <input 
//                 {...register('address.zipCode')}
//                 type="text" 
//                 placeholder="CEP" 
//                 maxLength={9}
//                  />
//                     {errors.address?.zipCode?.message &&(
//                         <p>{errors.address?.zipCode?.message}</p>
//                     )}
//                 <input {...register('address.street')} type="text"  placeholder="Rua" />
//                     {errors.address?.street?.message &&(
//                         <p>{errors.address?.street?.message}</p>
//                     )}
//                 <input {...register('address.number')} type="text"  placeholder="Numero" />
//                     {errors.address?.number?.message &&(
//                         <p>{errors.address?.number?.message}</p>
//                     )}
//                 <input {...register('address.distric')} type="text"  placeholder="Bairro" />
//                     {errors.address?.distric?.message &&(
//                         <p>{errors.address?.distric?.message}</p>
//                     )}
//                 <input {...register('address.state')} type="text"  placeholder="Estado" />
//                     {errors.address?.state?.message &&(
//                         <p>{errors.address?.state?.message}</p>
//                     )}
//                 <input {...register('address.city')} type="text"  placeholder="Cidade" />
//                     {errors.address?.city?.message &&(
//                         <p>{errors.address?.city?.message}</p>
//                     )}
//                 <input {...register('address.complement')} type="text"  placeholder="Complemento" />
//                     {errors.address?.complement?.message &&(
//                         <p>{errors.address?.complement?.message}</p>
//                     )}

//                 <button type="submit">Enviar</button>
//             </form>
//         </div>
//     )
// }