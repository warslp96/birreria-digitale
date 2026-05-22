import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definiamo l'interfaccia per mappare esattamente i dati JSON di Spring Boot
export interface Birra {
  id?: number;
  nome: string;
  stile: string;
  gradazione: number;
  prezzo: number;
  quantitaDisponibile: number;
}

@Injectable({
  providedIn: 'root'
})
export class BirraService {
  // L'URL del controller esposto da Spring Boot
  private apiUrl = '/api/birre';

  constructor(private http: HttpClient) { }

  // Metodo per recuperare la lista delle birre
  getBirre(): Observable<Birra[]> {
    return this.http.get<Birra[]>(this.apiUrl);
  }
  createBirra(birra: Birra): Observable<Birra> {
  return this.http.post<Birra>(this.apiUrl, birra);
}
  ordinaBirra(id: number): Observable<Birra> {
  return this.http.post<Birra>(`${this.apiUrl}/${id}/ordine`, {});
}
}
