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
@Table(name="anketlerSorular")
public class AnketlerSorular {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	
	@Column(name = "anket_id")
    private int anketId;
	
	@Column(name = "soru_id")
    private int soruId;

	public AnketlerSorular(int anketId, int soruId) {
		super();
		this.anketId = anketId;
		this.soruId = soruId;
	}
	
	public int getSoruId() {
		return soruId;
	}
	
	public void setSoruId(int id) {
		this.soruId = id;
	}
	
	public int getAnketId() {
		return anketId;
	}
	
	public void setAnketId(int id) {
		this.anketId = id;
	}
}
