package com.spring.survey.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="cevapAltSecenekler")
public class CevapAltSecenekler {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "secenek_id")
	private int id;
	
	@Column(name = "cevapaltsoru_id")
    private String cevapAltSoruId;
	
	@Column(name = "cevapaltsecenek_id")
    private String cevapAltSecenekId;
	
	@Column(name = "altcevap")
	private String altCevap;

	@Column(name = "anket_id")
	private int anket_id;
	
	public CevapAltSecenekler(String cevapAltSoruId, String cevapAltSecenekId, String altCevap , int anket_id) {
		this.cevapAltSoruId = cevapAltSoruId;
		this.cevapAltSecenekId = cevapAltSecenekId;
		this.altCevap = altCevap;
		this.anket_id = anket_id;
	}
	
	public String getCevapAltSoruId() {
		return cevapAltSoruId;
	}
	
	public void setCevapAltSoruId(String id) {
		this.cevapAltSoruId = id;
	}
	
	public String getCevapAltSecenekId() {
		return cevapAltSecenekId;
	}
	
	public void setCevapAltSecenekId(String id) {
		this.cevapAltSecenekId = id;
	}
	
	public String getAltCevap() {
		return altCevap;
	}
	
	public void setAltCevap(String cevap) {
		this.altCevap = cevap;
	}
}
