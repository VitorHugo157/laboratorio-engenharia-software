package edu.fateczl.vitor.hamburgueriabackend.service;

import edu.fateczl.vitor.hamburgueriabackend.model.Hamburguer;
import edu.fateczl.vitor.hamburgueriabackend.repository.HamburguerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HamburguerService {

    @Autowired
    private HamburguerRepository repository;

    public void adicionar(Hamburguer h) {
        repository.save(h);
    }

    public List<Hamburguer> pesquisar(String nome) {
        return repository.findByNomeLike("%"+nome+"%");
    }
}
