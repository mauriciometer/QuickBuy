import { Component, OnInit } from "@angular/core"
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras"
import { Produto } from "../../modelo/produto";

@Component({
  selector: "loja-efetivar",
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public total: number;


  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }

  public atualizarPreco(produto: Produto, quantidade: number) {

    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }
    produto.preco = produto.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.produtos);
    this.atualizarTotal();
  }

  public remover(produto: Produto) {

    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();

  }

  public atualizarTotal() {
    //este comando reduce , percorre toda a lista de itens , gravando em acc(variavel qquer)
    //o resultado de uma ação definida(neste caso acumulando acc + preco), começando a partir do primeiro item da lista(0)

    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }
}
