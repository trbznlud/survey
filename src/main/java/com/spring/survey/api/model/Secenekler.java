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
@Table(name="secenekler")
public class Secenekler {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "secenek_id")
	private int id;
	@Column(name = "survey_secenek")
	private String secenek;
	@Column(name= "survey_sorutip")
    private String soruTip;
	@Column(name = "soru_sayisi")
    private String secenekSayisi;
	@Column(name = "secenek_sayisi")
    private String secenekAlt;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSecenek() {
		return secenek;
	}
	public void setSecenek(String secenek) {
		this.secenek = secenek;
	}
	public String getSoruTip() {
		return soruTip;
	}
	public void setSoruTip(String soruTip) {
		this.soruTip = soruTip;
	}
	public String getSecenekSayisi() {
		return secenekSayisi;
	}
	public void setSecenekSayisi(String secenekSayisi) {
		this.secenekSayisi = secenekSayisi;
	}
	public String getSecenekAlt() {
		return secenekAlt;
	}
	public void setSecenekAlt(String secenekAlt) {
		this.secenekAlt = secenekAlt;
	}
}
