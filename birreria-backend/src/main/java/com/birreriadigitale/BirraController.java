package com.birreriadigitale;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/birre")
@CrossOrigin(origins = "http://localhost:4200") // Porta standard di Angular
public class BirraController {

    private final BirraRepository birraRepository;

    // Iniettiamo il repository tramite costruttore
    public BirraController(BirraRepository birraRepository) {
        this.birraRepository = birraRepository;
    }

    // GET: Recupera tutte le birre (http://localhost:8080/api/birre)
    @GetMapping
    public List<Birra> getAllBirre() {
        return birraRepository.findAll();
    }
    @PostMapping("/{id}/ordine")
    public Birra ordinaBirra(@PathVariable Integer id) {
        Birra birra = birraRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Birra non trovata con id: " + id));

        if (birra.getQuantitaDisponibile() > 0) {
            birra.setQuantitaDisponibile(birra.getQuantitaDisponibile() - 1);
            return birraRepository.save(birra);
        } else {
            throw new RuntimeException("Birra esaurita!");
        }
    }

    // POST: Aggiunge una nuova birra
    @PostMapping
    public Birra createBirra(@RequestBody Birra birra) {
        return birraRepository.save(birra);
    }
}