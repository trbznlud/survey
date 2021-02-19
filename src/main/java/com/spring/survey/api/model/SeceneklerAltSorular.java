package com.spring.survey.api.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="seceneklerAltSorular")
public class SeceneklerAltSorular {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	
	@Column(name = "secenek_id")
    private int secenekId;
	
	@Column(name = "altsoru_id")
    private int altSoruId;

	public SeceneklerAltSorular(int secenekId, int altSoruId) {
		this.secenekId = secenekId;
		this.altSoruId = altSoruId;
	}
	
	public int getSecenekId() {
		return secenekId;
	}
	
	public void setSecenekId(int id) {
		this.secenekId = id;
	}
	
	public int getAltSoruId() {
		return altSoruId;
	}
	
	public void setAltSoruId(int id) {
		this.altSoruId = id;
	}
}
