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
@Table(name="anketler")
public class Anketler {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "anket_id")
	private int id;
	@Column(name = "survey_anketAdi")
	private String anketAdi;
	@Column(name = "survey_anketAlani")
	private String anketAlani;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAnketAdi() {
		return anketAdi;
	}
	public void setAnketAdi(String anketAdi) {
		this.anketAdi = anketAdi;
	}
	public String getAnketAlani() {
		return anketAlani;
	}
	public void setAnketAlani(String anketAlani) {
		this.anketAlani = anketAlani;
	}
	
	
}
