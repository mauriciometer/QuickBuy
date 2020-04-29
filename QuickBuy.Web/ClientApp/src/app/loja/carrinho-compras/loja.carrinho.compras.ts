import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {
  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");

    if (!produtoLocalStorage) {
      this.produtos.push(produto);
      localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
      console.log("adicionando produto 1");
    } else {
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos.push(produto);
      console.log("adicionando outros produtos");
      localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    }
  }

  public obterProdutos(): Produto[] {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    console.log("obtendo produtos");
    console.log(produtoLocalStorage);
    if (produtoLocalStorage) {
      return JSON.parse(produtoLocalStorage);
    }
  }

  public removerProduto(produto: Produto) {

  }
}
