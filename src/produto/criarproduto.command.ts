import { IsNotEmpty } from "class-validator"

export class CriarProdutoCommand{
    @IsNotEmpty({message: "O nome não pode ser nulo!"})
    nome: string
    @IsNotEmpty({message: "A Marca não pode ser nulo!"})
    marca: string
    @IsNotEmpty({message: "O Preço não pode ser nulo!"})
    preco: number
}