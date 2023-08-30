import { Component, OnInit } from '@angular/core';
import { BdtempService } from 'src/app/services/bdtemp.service';

@Component({
  selector: 'app-suco',
  templateUrl: './suco.page.html',
  styleUrls: ['./suco.page.scss'],
})
export class SucoPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Del Valle 1 Litro", descricao: "Qualquer sabor", valor: 7.80, img:'https://delicious.com.br/wp-content/uploads/2022/05/73.png'},
    {nome: "Del Valle 450 ml", descricao: "Qualquer sabor", valor: 4.50, img:'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/609a94ff-b7f8-4e5d-a8de-69ddac1e06b6/609a94ff-7ecc-433e-b8b7-69ddac1e06b6.jpg'},
    {nome: "Purity 1 Litro", descricao: "Qualquer sabor", valor: 6.90, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdQflFFY3hOfoNrWAlCNUgiF7oOHB8eikuw&usqp=CAU'},
    {nome: "Purity 200 ml", descricao: "Qualquer sabor", valor: 1.99, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n5mATLLncMftM1qAxBAZHBQWM56K21bEzQ&usqp=CAU'},
    {nome: "Maguary 1 Litro", descricao: "Qualquer sabor", valor: 8.10, img:'https://britvicb2ctatix.vteximg.com.br/arquivos/ids/156214-514-514/7909000001082_1.jpg?v=637963506518130000'}
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

  ionViewWillEnter() {
    this.buscarDadosCarrinho();
  }
}
