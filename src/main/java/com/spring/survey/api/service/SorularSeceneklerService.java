package com.spring.survey.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.survey.api.model.SorularSecenekler;
import com.spring.survey.api.repository.SurveySorularSeceneklerRepositoryCrud;

@Service
public class SorularSeceneklerService {

	private SurveySorularSeceneklerRepositoryCrud sorularSecenekler;
	
	@Autowired
	public SorularSeceneklerService(SurveySorularSeceneklerRepositoryCrud sorularSecenekler) {
		this.sorularSecenekler = sorularSecenekler;
	}
	
	public SorularSecenekler saveSorularSecenekler(SorularSecenekler data) {
		return sorularSecenekler.save(data);
	}
}
