package com.example.demo.layer2;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ResidentialAddress")

public class ResidentialAddress {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long residentialid;
	
	private String Line1;

	private String Line2;

	private String Landmark;
	
	private String State;
	
	private String City;

	private BigDecimal Pincode;
	
	public ResidentialAddress() {
	}

	public long getResidentialid() {
		return residentialid;
	}

	public void setResidentialid(long residentialid) {
		this.residentialid = residentialid;
	}

	public String getLine1() {
		return Line1;
	}

	public void setLine1(String line1) {
		Line1 = line1;
	}

	public String getLine2() {
		return Line2;
	}

	public void setLine2(String line2) {
		Line2 = line2;
	}

	public String getLandmark() {
		return Landmark;
	}

	public void setLandmark(String landmark) {
		Landmark = landmark;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public BigDecimal getPincode() {
		return Pincode;
	}

	public void setPincode(BigDecimal pincode) {
		Pincode = pincode;
	}

	

	
}
