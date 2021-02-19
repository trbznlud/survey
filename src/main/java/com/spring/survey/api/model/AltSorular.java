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
@Table(name="altSorular")
public class  AltSorular{
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "altsoru_id")
	private int id;
	@Column(name = "survey_altsoru")
	private String altSoru;
	@Column(name = "soru_sayisi")
    private String altSoruSayisi;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAltSoru() {
		return altSoru;
	}
	public void setAltSoru(String altSoru) {
		this.altSoru = altSoru;
	}
	public String getAltSoruSayisi() {
		return altSoruSayisi;
	}
	public void setAltSoruSayisi(String altSoruSayisi) {
		this.altSoruSayisi = altSoruSayisi;
	}
}
