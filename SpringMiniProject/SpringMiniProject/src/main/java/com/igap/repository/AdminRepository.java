package com.igap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.igap.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

	// this will give entire entity
	// @Query("SELECT ad from Admin ad where ad.username=?1 AND ad.password=?2")
	// public Admin getAdminDetails(String username,String password);

	// This will give only required column data
//	@Query("SELECT ad.username,ad.password from Admin ad where ad.username=?1 AND ad.password=?2") 
	@Query("SELECT ad from Admin ad where ad.username=?1 AND ad.password=?2") 
	public Admin getAdminDetails(String username, String password);
}
