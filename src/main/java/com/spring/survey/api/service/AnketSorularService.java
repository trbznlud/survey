package com.spring.survey.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.survey.api.model.AnketlerSorular;
import com.spring.survey.api.repository.SurveyAnketSorularRepositoryCrud;

@Service
public class AnketSorularService {

	private SurveyAnketSorularRepositoryCrud anketSorular;

	@Autowired
	public AnketSorularService(SurveyAnketSorularRepositoryCrud anketSorular) {
		super();
		this.anketSorular = anketSorular;
	}
	
	public AnketlerSorular saveAnketSorular(AnketlerSorular data) {
		return anketSorular.save(data);
	}
}
