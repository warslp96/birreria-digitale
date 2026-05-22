package com.birreriadigitale;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(BirraRepository repository) {
        return args -> {
            // Controlliamo se il database è già popolato per evitare duplicati
            if (repository.count() == 0) {
                System.out.println("--- Popolamento iniziale del database in corso... ---");

                repository.save(new Birra("Ichnusa Non Filtrata", "Lager", 5.0, 3.50, 50));
                repository.save(new Birra("Punk IPA", "IPA", 5.4, 4.80, 30));
                repository.save(new Birra("Guinness Stout", "Stout", 4.2, 5.00, 25));
                repository.save(new Birra("Leffe Blonde", "Belgian Ale", 6.6, 4.00, 40));

                System.out.println("--- Database popolato con successo! ---");
            } else {
                System.out.println("--- Il database contiene già dei dati, salto il popolamento ---");
            }
        };
    }
}
