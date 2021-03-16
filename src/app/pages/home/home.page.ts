import { Component, OnInit } from '@angular/core';
import { TasadecambioService } from '../../services/tasadecambio.service';
import { Rates } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  tasas: Rates[] =[];
  numero: number = 0;
  entrada: number = null;
  de: string = "CLP";
  a: string = "USD";

  constructor(private tasaService: TasadecambioService) {

  }

  ngOnInit(){
    this.tasaService.getTopHeadLines()
    .subscribe(resp =>{
      
      this.tasas = resp.rates;
      
    });
  }

  onSubmit(){
    this.tasaService.getTopHeadLines()
    .subscribe(resp =>{
     
      this.tasas = resp.rates;
      
    });
    if (this.de === 'CLP')(
      this.numero=(this.entrada/this.tasas['CLP'])
      
    )
    else(
      this.numero=(this.entrada*this.tasas['CLP'])
    )
    
  }
  secondOnChange(){
   
    if (this.de === 'CLP')(
      this.a='USD'
      
    )
    else(
      this.a='CLP'
    )
  }

  firstOnChange(){
 
    if (this.a === 'CLP')(
      this.de='USD'
      
    )
    else(
      this.de='CLP'
    )
  }
}
