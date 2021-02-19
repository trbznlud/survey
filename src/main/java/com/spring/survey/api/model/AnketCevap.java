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
@Table(name="anketCevap")
public class AnketCevap {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "secenek_id")
	private int id;
	
	@Column(name = "anketid")
	private int anketId;

	public AnketCevap(int anketId) {
		super();
		this.anketId = anketId;
	}
	
	
}
