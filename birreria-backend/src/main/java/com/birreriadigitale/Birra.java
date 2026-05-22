package com.birreriadigitale;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "birre")
public class Birra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;
    private String stile; // Es: IPA, Stout, Pilsner
    private double gradazione; // Percentuale alcolica
    private double prezzo;
    private int quantitaDisponibile;

    // Costruttore vuoto (richiesto da JPA)
    public Birra() {
    }

    // Costruttore completo
    public Birra(String nome, String stile, double gradazione, double prezzo, int quantitaDisponibile) {
        this.nome = nome;
        this.stile = stile;
        this.gradazione = gradazione;
        this.prezzo = prezzo;
        this.quantitaDisponibile = quantitaDisponibile;
    }
}
