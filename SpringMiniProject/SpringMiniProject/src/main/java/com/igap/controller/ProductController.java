package com.igap.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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

import com.igap.entity.Admin;
import com.igap.entity.Product;
import com.igap.repository.ProductRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private ProductRepository productrepo;

	@GetMapping("/")
	public List<Product> getall() {
		return productrepo.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Product> getById(@PathVariable int id) {
		Optional<Product> theProduct = productrepo.findById(id);

		if (theProduct == null) {
			throw new ArithmeticException("No Data Found");
		}
		return theProduct;
	}

	@PostMapping("/")
	public Product saveAll(@RequestBody Product theProduct) {
		theProduct.setId(0);
		productrepo.save(theProduct);
		return theProduct;
  
	}

	@PutMapping("/{id}")
	public ResponseEntity<Product> updateProduct(@RequestBody Product theProduct, @PathVariable int id) {

		Product exstingProduct = productrepo.getById(id);

		if (exstingProduct == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		exstingProduct.setName(theProduct.getName());
		exstingProduct.setGstpercentage(theProduct.getGstpercentage());
		exstingProduct.setPrice(theProduct.getPrice());

		Product updatedProduct = productrepo.save(exstingProduct);

		return ResponseEntity.ok().body(updatedProduct);

	}

	@DeleteMapping("/{id}")
//	public String delete(@PathVariable int id) {
//		Optional<Product> theProduct = productrepo.findById(id);
//		productrepo.deleteById(id);
//		return "Deleted" + " " + id;
//	}
	
	public ResponseEntity<Product> delete(@PathVariable int id) {
		Optional<Product> theProduct = productrepo.findById(id);
		productrepo.deleteById(id);
//		return "Deleted" + " " + id;
		return ResponseEntity.noContent().build();
	}

}
