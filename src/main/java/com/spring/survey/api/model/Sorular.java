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
@Table(name="sorular")
public class Sorular {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "soru_id")
    private int id;
    @Column(name = "survey_soru")
    private String soru;
    @Column(name = "soru_sayisi")
    private String soruSayisi;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSoru() {
		return soru;
	}
	public void setSoru(String soru) {
		this.soru = soru;
	}
	public String getSoruSayisi() {
		return soruSayisi;
	}
	public void setSoruSayisi(String soruSayisi) {
		this.soruSayisi = soruSayisi;
	}
}
