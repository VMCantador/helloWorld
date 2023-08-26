import { Component, OnInit } from '@angular/core';
import { BdtempService } from 'src/app/services/bdtemp.service';

@Component({
  selector: 'app-refrigerante',
  templateUrl: './refrigerante.page.html',
  styleUrls: ['./refrigerante.page.scss'],
})
export class RefrigerantePage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Coca Cola", descricao: "2 Litros", valor: 7.49, img:'https://tdc099.vtexassets.com/arquivos/ids/220110/FOTOSVTEX.jpg?v=638200233096670000'},
    {nome: "Sprite", descricao: "2 Litros", valor: 6.50, img:'https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/sprite-2l1-e417cb819b95bee41a15698492209281-480-0.png'},
    {nome: "Guaraná Antartica", descricao: "2 Litros", valor: 6.75, img:'https://d2r9epyceweg5n.cloudfront.net/stores/001/184/939/products/guarana-antartica-pet-2lts1-a8e968f3f6e76f013315892352692656-480-0.png'},
    {nome: "Coca Cola", descricao: "Lata 350 ml", valor: 2.50, img:'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1984-refrigerante-coca-cola-lata-350ml.jpg?s=ef1f9ccf20330fe8f998c65372625c77'},
    {nome: "Refrigerante Jahuba 2 Litros", descricao: "Sabores", valor: 4.75, img:'https://img.sitemercado.com.br/produtos/433b8ca35eafc6af550f85dac88ace40c595a2b4c1490e87a652ce992f8e266a_full.jpg'}
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
