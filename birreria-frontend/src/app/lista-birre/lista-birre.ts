import { Component, OnInit, signal   } from '@angular/core';
import { CurrencyPipe } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { BirraService, Birra } from '../services/birra';

@Component({
  selector: 'app-lista-birre',
  standalone: true,
  imports: [CurrencyPipe, FormsModule], // Sostituisci CommonModule con CurrencyPipe
  templateUrl: './lista-birre.html',
  styleUrl: './lista-birre.css'
})
export class ListaBirreComponent implements OnInit {
  
  // 2. Trasformiamo l'array in un Segnale reattivo nativo di Angular
  elencoBirre = signal<Birra[]>([]);

  nuovaBirra: Birra = { nome: '', stile: '', gradazione: 0, prezzo: 0, quantitaDisponibile: 0 };

  constructor(private birraService: BirraService) { }

  ngOnInit(): void {
    this.caricaMenu();
  }

  caricaMenu(): void {
    this.birraService.getBirre().subscribe({
      next: (dati) => {
        // 3. Aggiorna il valore del segnale. Questo notifica DIRETTAMENTE lo schermo
        this.elencoBirre.set(dati); 
      },
      error: (err) => console.error(err)
    });
  }

  aggiungiBirra(): void {
    if (!this.nuovaBirra.nome || !this.nuovaBirra.stile) return;

    this.birraService.createBirra(this.nuovaBirra).subscribe({
      next: () => {
        this.caricaMenu(); // Ricarica il menu aggiornato
        this.nuovaBirra = { nome: '', stile: '', gradazione: 0, prezzo: 0, quantitaDisponibile: 0 };
      }
    });
  }

  ordina(birra: Birra): void {
    if (birra.id && birra.quantitaDisponibile > 0) {
      this.birraService.ordinaBirra(birra.id).subscribe({
        next: () => this.caricaMenu()
      });
    }
  }
}


