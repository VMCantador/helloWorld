import { Component, OnInit } from '@angular/core';
import { BdtempService } from 'src/app/services/bdtemp.service';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.page.html',
  styleUrls: ['./agua.page.scss'],
})
export class AguaPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Minalba", descricao: "pet de 500 ml", valor: 2.49, img:'https://samsclub.vtexassets.com/arquivos/ids/175670-800-auto?v=638001383415000000&width=800&height=auto&aspect=true'},
    {nome: "Minalba", descricao: "pet de 1.5 Lts", valor: 5.50, img:'https://bretas.vtexassets.com/arquivos/ids/179178-800-auto?v=638243328258030000&width=800&height=auto&aspect=true'},
    {nome: "Pureza Vital", descricao: "pet de 500 ml", valor: 2.65, img:'https://www.imigrantesbebidas.com.br/bebida/images/products/full/2823-agua-mineral-pureza-vital-sem-gas-510-ml.jpg'},
    {nome: "Pureza Vital", descricao: "pet de 1.5 Lts", valor: 6.00, img:'https://www.emporionestle.com.br/media/catalog/product/a/g/agua-mineral-nestle-pureza-vital.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265'},
    {nome: "Pureza Vital", descricao: "pet de 5 Lts", valor: 9.50, img:'https://www.nestlepurezavital.com.br/sites/g/files/xknfdk1096/files/19_NPV_550x750.png'},
    {nome: "Cristal", descricao: "copo 180 ml", valor: 1.50, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXliZx3cScuqogcRDFrLsYQcRYTSf3CVDUA&usqp=CAU'}
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
