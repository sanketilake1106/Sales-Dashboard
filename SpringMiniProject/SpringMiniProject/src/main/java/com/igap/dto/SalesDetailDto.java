package com.igap.dto;

import lombok.Data;

@Data
public class SalesDetailDto {

	private int id;
	private int saleid;
	private int productid;
	private int quantity;
	private double price;
	private double subtotal;
	private double gstPercentage;
	private double gstAmount;
	private double billAmount;

	public SalesDetailDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SalesDetailDto(int id, int saleid, int productid, int quantity, double price, double subtotal,
			double gstPercentage, double gstAmount, double billAmount) {
		super();
		this.id = id;
		this.saleid = saleid;
		this.productid = productid;
		this.quantity = quantity;
		this.price = price;
		this.subtotal = subtotal;
		this.gstPercentage = gstPercentage;
		this.gstAmount = gstAmount;
		this.billAmount = billAmount;
	}

	@Override
	public String toString() {
		return "SalesDetailDto [id=" + id + ", saleid=" + saleid + ", productid=" + productid + ", quantity=" + quantity
				+ ", price=" + price + ", subtotal=" + subtotal + ", gstPercentage=" + gstPercentage + ", gstAmount="
				+ gstAmount + ", billAmount=" + billAmount + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSaleid() {
		return saleid;
	}

	public void setSaleid(int saleid) {
		this.saleid = saleid;
	}

	public int getProductid() {
		return productid;
	}

	public void setProductid(int productid) {
		this.productid = productid;
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
