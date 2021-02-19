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
@Table(name="altSecenekler")
public class AltSecenekler {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "altsecenek_id")
	private int id;
	@Column(name = "survey_altsecenek")
	private String altSecenek;
	@Column(name= "survey_altsorutip")
    private String altSoruTip;
	@Column(name = "altsecenek_sayisi")
    private String altSecenekSayisi;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAltSecenek() {
		return altSecenek;
	}
	public void setAltSecenek(String altSecenek) {
		this.altSecenek = altSecenek;
	}
	public String getAltSoruTip() {
		return altSoruTip;
	}
	public void setAltSoruTip(String altSoruTip) {
		this.altSoruTip = altSoruTip;
	}
	public String getAltSecenekSayisi() {
		return altSecenekSayisi;
	}
	public void setAltSecenekSayisi(String sayi) {
		this.altSecenekSayisi = sayi;
	}
}
