
package com.igap.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "sales")
public class Sale {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	private String saleDate;
	private String customerName;
	private String mobileNo;
	private double subTotal;
	private double gstTotal;
	private double billTotal;

	@ManyToOne
	@JoinColumn(name = "adminid")
	@JsonIgnoreProperties(value = { "adminid" }, allowSetters = true)
	private Admin admin;

	@OneToMany(mappedBy = "sale", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnoreProperties(value = { "sale" }, allowSetters = true)
	private List<SalesDetail> salesDetails;

	public Sale() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Sale(int id, String saleDate, String customerName, String mobileNo, double subTotal, double gstTotal,
			double billTotal, Admin admin, List<SalesDetail> salesDetails) {
		super();
		this.id = id;
		this.saleDate = saleDate;
		this.customerName = customerName;
		this.mobileNo = mobileNo;
		this.subTotal = subTotal;
		this.gstTotal = gstTotal;
		this.billTotal = billTotal;
		this.admin = admin;
		this.salesDetails = salesDetails;
	}

	@Override
	public String toString() {
		return "Sale [id=" + id + ", saleDate=" + saleDate + ", customerName=" + customerName + ", mobileNo=" + mobileNo
				+ ", subTotal=" + subTotal + ", gstTotal=" + gstTotal + ", billTotal=" + billTotal + ", admin=" + admin
				+ ", salesDetails=" + salesDetails + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSaleDate() {
		return saleDate;
	}

	public void setSaleDate(String saleDate) {
		this.saleDate = saleDate;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public double getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(double subTotal) {
		this.subTotal = subTotal;
	}

	public double getGstTotal() {
		return gstTotal;
	}

	public void setGstTotal(double gstTotal) {
		this.gstTotal = gstTotal;
	}

	public double getBillTotal() {
		return billTotal;
	}

	public void setBillTotal(double billTotal) {
		this.billTotal = billTotal;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public List<SalesDetail> getSalesDetails() {
		return salesDetails;
	}

	public void setSalesDetails(List<SalesDetail> salesDetails) {
		this.salesDetails = salesDetails;
	}

	

}