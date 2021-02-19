package com.spring.survey.api.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="cevapSecenekler")
public class CevapSecenekler {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "secenek_id")
	private int id;
	
	@Column(name = "cevapsoru_id")
    private String cevapSoruId;
	
	@Column(name = "cevapsecenek_id")
    private String cevapSecenekId;
	
	@Column(name = "cevap")
	private String cevap;
	
	@Column(name = "anket_id")
	private int anket_id;
	
	public String getCevapSoruId() {
		return cevapSoruId;
	}
	
	public void setCevapSoruId(String id) {
		this.cevapSoruId = id;
	}
	
	public String getCevapSecenekId() {
		return cevapSecenekId;
	}
	
	public void setCevapSecenekId(String id) {
		this.cevapSecenekId = id;
	}
	
	public String getCevap() {
		return cevap;
	}
	
	public void setCevap(String cevap) {
		this.cevap = cevap;
	}

	public CevapSecenekler(String cevapSoruId, String cevapSecenekId, String cevap , int id) {
		this.cevapSoruId = cevapSoruId;
		this.cevapSecenekId = cevapSecenekId;
		this.cevap = cevap;
		this.anket_id =id;
	}
}
