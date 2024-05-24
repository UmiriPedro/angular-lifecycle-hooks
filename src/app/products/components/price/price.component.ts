import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  // Se usa el '$' como estandar para identificar rápidamente a que es un observable
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
    this.interval$= interval(1000).subscribe( value => console.log(`Tick: ${value}`) ); //1000 equivale a 1s = 1000ms
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
