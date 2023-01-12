import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CriarProdutoCommand } from "./criarproduto.command";
import { ProdutoService } from "./produto.service";


@Controller("produto")
export class ProdutoController{

    constructor(
        public produtoService: ProdutoService
    ){}

    @Get()
    async ListaProduto(){
        return await this.produtoService.GetAll();
    }

    @Get(":id")
    async ListaProdutoPorId(
        @Param("id")id: number
    ){
        return await this.produtoService.GetById(id);
    }

    @Post()
    async CadastraProduto(
        @Body()criarProdutoCommand : CriarProdutoCommand
    ){
        console.log(criarProdutoCommand);
        return await this.produtoService.Create(criarProdutoCommand);
    }
}