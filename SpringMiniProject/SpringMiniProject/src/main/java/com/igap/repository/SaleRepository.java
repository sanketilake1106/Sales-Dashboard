package com.igap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.igap.entity.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Integer>{

}
