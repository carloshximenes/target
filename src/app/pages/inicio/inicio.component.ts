import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  public sequenciaFibonacci: number[] = [];
  public exibirImagem: boolean = true;
  public sequenciaNumerica: number[] = Array.from({ length: 11 }, (_, i) => i);

  constructor() {}

  ngOnInit(): void {
    this.gerarProximoNumeroFibonacci();
  }

  public gerarProximoNumeroFibonacci(): void {
    let ultimaPosicao = this.sequenciaFibonacci.length;
    const proximoNumero = this.fibonacci(ultimaPosicao++);

    this.sequenciaFibonacci.push(proximoNumero);
  }

  public displaySequenciaFibonacci(): string {
    return this.sequenciaFibonacci.join(', ');
  }

  public displayUltimoNumeroGerado(): string {
    let ultimaPosicao = this.sequenciaFibonacci.length;
    return `${this.sequenciaFibonacci[--ultimaPosicao]}`;
  }

  private fibonacci(numero: number): number {
    if (numero <= 1) {
      return 1;
    }
    return this.fibonacci(numero - 1) + this.fibonacci(numero - 2);
  }

  public displayStatusImagem(): string {
    return this.exibirImagem ? 'VISÍVEL' : 'INVISÍVEL';
  }

  public filtrarValor(value: number) {
    if (value < 0 || value > 10) {
      return;
    }
    this.sequenciaNumerica = Array.from({ length: 11 }, (_, i) => i).filter(
      (n) => n == value
    );
  }

  public resetarSequencia(): void {
    this.sequenciaNumerica = Array.from({ length: 11 }, (_, i) => i);
  }
}
