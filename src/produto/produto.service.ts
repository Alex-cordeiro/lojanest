import { Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common/exceptions";
import { PrismaService } from "src/core/prisma.service";
import { CriarProdutoCommand } from "./criarproduto.command";

@Injectable()
export class ProdutoService{

    constructor(
        private prismaService: PrismaService
        ){}


    async GetAll(){
        const result = await this.prismaService.produto.findMany();
        if(result.length <= 0){
            throw new NotFoundException("Não foram encontrados registros na base!");
        }
        return result;
        
    }

    async GetById(id: number){
        const result = await this.prismaService.produto.findUnique({
            where: {
                id
            }
        });
        if(!result){
            throw new NotFoundException("Não foram encontrados registros na base!");
        }
        return result;
    }

    async Create(criarProdutoCommand: CriarProdutoCommand){
       
        const result = await this.prismaService.produto.create({
            data: {
                marca: criarProdutoCommand.marca,
                nome: criarProdutoCommand.nome,
                preco: criarProdutoCommand.preco
            }
        });
        return result;
        
    }
}