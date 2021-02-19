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
@Table(name="altsorularAltSecenekler")
public class AltSorularAltSecenekler {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	
	@Column(name = "altsoru_id")
    private int altSoruId;
	
	@Column(name = "altsecenek_id")
    private int altSecenekId;

	public AltSorularAltSecenekler(int altSoruId, int altSecenekId) {
		this.altSoruId = altSoruId;
		this.altSecenekId = altSecenekId;
	}
	
	public int getAltSoruId() {
		return altSoruId;
	}
	
	public void setAltSoruId(int id) {
		this.altSoruId = id;
	}
	
	public int getAltSecenekId() {
		return altSecenekId;
	}
	
	public void setAltSecenekId(int id) {
		this.altSecenekId = id;
	}
}
