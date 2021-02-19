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
@Table(name="sorularSecenekler")
public class SorularSecenekler {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	
	@Column(name = "soru_id")
    private int soruId;
	
	@Column(name = "secenek_id")
    private int secenekId;

	public SorularSecenekler(int soruId, int secenekId) {
		this.soruId = soruId;
		this.secenekId = secenekId;
	}
	
	public int getSoruId() {
		return soruId;
	}
	
	public void setSoruId(int id) {
		this.soruId = id;
	}
	
	public int getSecenekId() {
		return secenekId;
	}
	
	public void setSecenekId(int id) {
		this.secenekId = id;
	}
}
