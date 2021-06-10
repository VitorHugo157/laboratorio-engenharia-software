package edu.fateczl.vitor.hamburgueriabackend.repository;

import edu.fateczl.vitor.hamburgueriabackend.model.Hamburguer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HamburguerRepository extends JpaRepository<Hamburguer, Integer> {
    public List<Hamburguer> findByNomeLike(String nome);
}
