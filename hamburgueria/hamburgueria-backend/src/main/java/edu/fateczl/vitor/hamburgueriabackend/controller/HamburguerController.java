package edu.fateczl.vitor.hamburgueriabackend.controller;

import edu.fateczl.vitor.hamburgueriabackend.model.Hamburguer;
import edu.fateczl.vitor.hamburgueriabackend.service.HamburguerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/hamburguer")
public class HamburguerController {

    @Autowired
    private HamburguerService service;

    @PostMapping("/add")
    public String adicionarHamburguer(@Valid @RequestBody Hamburguer h) {

        service.adicionar(h);
        return "Hamburguer adicionado com sucesso!";
    }

    @GetMapping("/find/{nome}")
    public ResponseEntity<List<Hamburguer>> pesquisarHamburguersPorNome(@PathVariable(value = "nome") String nome) {
        List<Hamburguer> hamburguers = service.pesquisar(nome);
        return ResponseEntity.ok().body(hamburguers);
    }
}
