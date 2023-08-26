import { Component, OnInit } from '@angular/core';
import { BdtempService } from 'src/app/services/bdtemp.service';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.page.html',
  styleUrls: ['./cerveja.page.scss'],
})
export class CervejaPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Brahma", descricao: "Fardo c/ 12 latas", valor: 25.59, img:'https://superprix.vteximg.com.br/arquivos/ids/202691-600-600/6d2e9c7d01f528c151d7b13faaebbf41_cerveja-brahma-chopp-350ml-pack-c-12-unidades---lata--_lett_1.jpg?v=637686068524030000'},
    {nome: "Brahma", descricao: "300 ml", valor: 3.99, img:'https://chamadaposse.bidela.com.br/wp-content/uploads/2021/12/chama-da-posse_300ml-garrafa_24-ceveja-brahma.jpg'},
    {nome: "Itaipava", descricao: "Fardo c/ 12 latas", valor: 23.35, img:'https://a-static.mlcdn.com.br/450x450/caixinha-de-cerveja-itaipava-lata-350ml-12-un/merceariaoliveirajunior/6e3883521d5f11ecbe2c4201ac185013/1011c8a076bd8f7a91b3ed0889e1dd98.jpeg'},
    {nome: "Itaipava Premium", descricao: "Lata 350 ml", valor: 6.15, img:'https://rafasupervarejao.com.br/33156/7898377661527-cerveja-itaipava-premium-puro-malte-350ml.jpg'},
    {nome: "Bavaria", descricao: "Fardo c/ 12 latas", valor: 19.90, img:'https://http2.mlstatic.com/D_NQ_NP_641601-MLB50235044023_062022-O.webp'}
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
