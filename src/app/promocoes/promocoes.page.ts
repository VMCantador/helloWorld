import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Heineken", descricao: "600 ml", valor: 6.95, img:'https://static.cestasmichelli.com.br/images/product/22642gg.jpg?ims=750x750'},
    {nome: "Bud", descricao: "600 ml", valor: 6.95, img:'https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/bebfesta/catalog/produtos/teste/beb-festa-cerveja-budweiser-600ml.jpg'},
    {nome: "Skol", descricao: "Litrão", valor: 4.50, img:'https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-skol-1000-ml1-4201d3b09d8db9916f15676911862889-480-0.jpg'},
    {nome: "Brahma", descricao: "Lata", valor: 5.00, img:'https://choppbrahmaexpress.vtexassets.com/arquivos/ids/155702-800-800?v=637353454674430000&width=800&height=800&aspect=true'},
    {nome: "Sub-Zero", descricao: "Lata", valor: 3.85, img:'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/8d435efb2cb5588201.png'}
  ]

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);

    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
  }

}
