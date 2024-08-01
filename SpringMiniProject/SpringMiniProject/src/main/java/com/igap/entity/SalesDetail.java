package com.igap.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "sale_details")
public class SalesDetail {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@ManyToOne
	@JoinColumn(name = "saleid")
	@JsonIgnoreProperties(value = { "saleid" }, allowSetters = true)
	private Sale sale;

	@ManyToOne
	@JoinColumn(name = "productid")
	@JsonIgnoreProperties(value = { "productid" }, allowSetters = true)
	private Product product;

	private int quantity;
	private double price;

	private double subtotal;
	private double gstPercentage;
	private double gstAmount;
	private double billAmount;

	public SalesDetail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SalesDetail(int id, Sale sale, Product product, int quantity, double price, double subtotal,
			double gstPercentage, double gstAmount, double billAmount) {
		super();
		this.id = id;
		this.sale = sale;
		this.product = product;
		this.quantity = quantity;
		this.price = price;
		this.subtotal = subtotal;
		this.gstPercentage = gstPercentage;
		this.gstAmount = gstAmount;
		this.billAmount = billAmount;
	}

	@Override
	public String toString() {
		return "SalesDetail [id=" + id + ", sale=" + sale + ", product=" + product + ", quantity=" + quantity
				+ ", price=" + price + ", subtotal=" + subtotal + ", gstPercentage=" + gstPercentage + ", gstAmount="
				+ gstAmount + ", billAmount=" + billAmount + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Sale getSale() {
		return sale;
	}

	public void setSale(Sale sale) {
		this.sale = sale;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}

	public double getGstPercentage() {
		return gstPercentage;
	}

	public void setGstPercentage(double gstPercentage) {
		this.gstPercentage = gstPercentage;
	}

	public double getGstAmount() {
		return gstAmount;
	}

	public void setGstAmount(double gstAmount) {
		this.gstAmount = gstAmount;
	}

	public double getBillAmount() {
		return billAmount;
	}

	public void setBillAmount(double billAmount) {
		this.billAmount = billAmount;
	}

}
