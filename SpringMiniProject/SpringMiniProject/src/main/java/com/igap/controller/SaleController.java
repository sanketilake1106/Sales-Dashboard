package com.igap.controller;

import java.util.ArrayList;
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

import com.igap.dto.SalesDetailDto;
import com.igap.dto.SalesDto;
import com.igap.entity.Admin;
import com.igap.entity.Product;
import com.igap.entity.Sale;
import com.igap.entity.SalesDetail;
import com.igap.repository.AdminRepository;
import com.igap.repository.ProductRepository;
import com.igap.repository.SaleRepository;

@RestController
@RequestMapping("/sales")
@CrossOrigin("*")
public class SaleController {

	@Autowired
	private SaleRepository salerepo;
	@Autowired
	private AdminRepository adminrepo;
	@Autowired
	private ProductRepository productrepo;

	@GetMapping("/")
	public List<Sale> getall() {
		return salerepo.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Sale> getById(@PathVariable int id) {
		Optional<Sale> theSale = salerepo.findById(id);

		if (theSale == null) {
			throw new ArithmeticException("No Data Found");
		}
		return theSale;
	}

	@PostMapping("/")
	public Sale saveAll(@RequestBody SalesDto saleDTO) {
		Sale sale = new Sale();
		sale.setId(saleDTO.getId());
		sale.setCustomerName(saleDTO.getCustomerName());
		sale.setMobileNo(saleDTO.getMobileNo());
		sale.setSubTotal(saleDTO.getSubTotal());
		sale.setGstTotal(saleDTO.getGstTotal());
		sale.setBillTotal(saleDTO.getBillTotal());
		sale.setSaleDate(saleDTO.getSaleDate());

		Admin admin = adminrepo.findById(saleDTO.getAdminid()).orElse(null);
		sale.setAdmin(admin);

		List<SalesDetailDto> saleDetailDTO = saleDTO.getSalesDetails();
		List<SalesDetail> saleDetails = new ArrayList<SalesDetail>();
		for (int i = 0; i < saleDetailDTO.size(); i++) {
			Product product = productrepo.findById(saleDetailDTO.get(i).getProductid()).orElse(null);
			SalesDetail salesDetail = new SalesDetail();
			salesDetail.setId(0);
			salesDetail.setSale(sale);
			salesDetail.setProduct(product);
			salesDetail.setQuantity(saleDetailDTO.get(i).getQuantity());
			salesDetail.setPrice(saleDetailDTO.get(i).getPrice());
			salesDetail.setGstPercentage(saleDetailDTO.get(i).getGstPercentage());
			salesDetail.setGstAmount(saleDetailDTO.get(i).getGstAmount());
			salesDetail.setSubtotal(saleDetailDTO.get(i).getSubtotal());
			salesDetail.setBillAmount(saleDetailDTO.get(i).getBillAmount());
			saleDetails.add(salesDetail);
		}
		sale.setSalesDetails(saleDetails);
		return salerepo.save(sale);
	}

	
	
	
	
	@PutMapping("/{id}")
	public ResponseEntity<Sale> updateSale(@RequestBody Sale theSale, @PathVariable int id) {

		Sale exstingSales = salerepo.getById(id);

		if (exstingSales == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		exstingSales.setCustomerName(theSale.getCustomerName());
		exstingSales.setMobileNo(theSale.getMobileNo());
		exstingSales.setSubTotal(theSale.getSubTotal());
		exstingSales.setGstTotal(theSale.getGstTotal());
		exstingSales.setBillTotal(theSale.getBillTotal());
		exstingSales.setSaleDate(theSale.getSaleDate());

		Sale updatedSales = salerepo.save(exstingSales);

		return ResponseEntity.ok().body(updatedSales);

	}
	
	

	@DeleteMapping("/{id}")
	public ResponseEntity<Sale> delete(@PathVariable int id) {
		Optional<Sale> theSale = salerepo.findById(id);
		salerepo.deleteById(id);
//		return "Deleted" + " " + id;
		return ResponseEntity.noContent().build();
	}


}
