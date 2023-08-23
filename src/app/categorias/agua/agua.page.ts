import { Component, OnInit } from '@angular/core';
import { BdtempService } from 'src/app/services/bdtemp.service';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.page.html',
  styleUrls: ['./agua.page.scss'],
})
export class AguaPage implements OnInit {

  listaProdutos = [
    {nome: "Minalba", descricao: "pet de 500 ml", valor: 2.49},
    {nome: "Minalba", descricao: "pet de 1.5 Lts", valor: 5.50},
    {nome: "Pureza Vital", descricao: "pet de 500 ml", valor: 2.65},
    {nome: "Pureza Vital", descricao: "pet de 1.5 Lts", valor: 6.00},
    {nome: "Pureza Vital", descricao: "pet de 5 Lts", valor: 9.50},
    {nome: "Pureza Vital", descricao: "copo 180 ml", valor: 1.50}
  ]

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);
  }

}
