package com.igap.dto;

import java.util.List;

import lombok.Data;

@Data
public class SalesDto {

	private int id;
	private String saleDate;
	private String customerName;
	private String mobileNo;
	private double subTotal;
	private double gstTotal;
	private double billTotal;
	private int adminid;

	private List<SalesDetailDto> salesDetails;

	public SalesDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SalesDto(int id, String saleDate, String customerName, String mobileNo, double subTotal, double gstTotal,
			double billTotal, int adminid, List<SalesDetailDto> salesDetails) {
		super();
		this.id = id;
		this.saleDate = saleDate;
		this.customerName = customerName;
		this.mobileNo = mobileNo;
		this.subTotal = subTotal;
		this.gstTotal = gstTotal;
		this.billTotal = billTotal;
		this.adminid = adminid;
		this.salesDetails = salesDetails;
	}

	@Override
	public String toString() {
		return "SalesDto [id=" + id + ", saleDate=" + saleDate + ", customerName=" + customerName + ", mobileNo="
				+ mobileNo + ", subTotal=" + subTotal + ", gstTotal=" + gstTotal + ", billTotal=" + billTotal
				+ ", adminid=" + adminid + ", salesDetails=" + salesDetails + "]";
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

	public int getAdminid() {
		return adminid;
	}

	public void setAdminid(int adminid) {
		this.adminid = adminid;
	}

	public List<SalesDetailDto> getSalesDetails() {
		return salesDetails;
	}

	public void setSalesDetails(List<SalesDetailDto> salesDetails) {
		this.salesDetails = salesDetails;
	}

}
