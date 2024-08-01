package com.igap.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.igap.LoginStatus.LoginStatus;
import com.igap.dto.LoginUserDto;
import com.igap.entity.Admin;
import com.igap.entity.Product;
import com.igap.repository.AdminRepository;

@RestController
@RequestMapping("/admins")
@CrossOrigin("*")
public class AdminController {

	@Autowired
	private AdminRepository adminrepo;

	@GetMapping("/")
	public List<Admin> getall() {
		return adminrepo.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Admin> getById(@PathVariable int id) {
		Optional<Admin> theAdmin = adminrepo.findById(id);

		if (theAdmin == null) {
			throw new ArithmeticException("No Data Found");
		}
		return theAdmin;
	}

	@PostMapping("/")
	public Admin saveAll(@RequestBody Admin theAdmin) {
		theAdmin.setId(0);
		adminrepo.save(theAdmin);
		return theAdmin;

	}

	@PostMapping("/login")
	public  LoginStatus getAdminName(@RequestBody LoginUserDto loginUserDto)
	{ 
		 
		
		 LoginStatus ls=new LoginStatus();
	     Admin theAdmin=adminrepo.getAdminDetails(loginUserDto.getUsername(), loginUserDto.getPassword());
	     if(theAdmin==null)
	     {
	    	
	    	 ls.status="failed";
	     }
	     else
	     {
	    	  
	    	 ls.status="success"; 
	    	 ls.admin= theAdmin;
	     }
	     return ls;
	}
	

	
	
	@PutMapping("/{id}")
	public ResponseEntity<Admin> updateAdmin(@RequestBody Admin theAdmin, @PathVariable int id) {

		Admin exstingAdmin = adminrepo.getById(id);

		if (exstingAdmin == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		exstingAdmin.setName(theAdmin.getName());
		exstingAdmin.setUsername(theAdmin.getUsername());
		exstingAdmin.setPassword(theAdmin.getPassword());

		Admin updatedAdmin = adminrepo.save(exstingAdmin);

		return ResponseEntity.ok().body(updatedAdmin);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Admin> delete(@PathVariable int id) {
		Optional<Admin> theAdmin = adminrepo.findById(id);
		adminrepo.deleteById(id);
//		return "Deleted" + " " + id;
		return ResponseEntity.noContent().build();
	}

}
