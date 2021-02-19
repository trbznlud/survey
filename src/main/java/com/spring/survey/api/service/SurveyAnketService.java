package com.spring.survey.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.survey.api.model.Anketler;
import com.spring.survey.api.repository.SurveyAnketRepositoryCrud;

@Service
public class SurveyAnketService{

	private SurveyAnketRepositoryCrud surveyAnketRepositoryCrud;

	@Autowired
	public SurveyAnketService(SurveyAnketRepositoryCrud surveyAnketRepositoryCrud) {
		this.surveyAnketRepositoryCrud = surveyAnketRepositoryCrud;
	}
	
	public Anketler saveAnketler(Anketler anketler) {
		return surveyAnketRepositoryCrud.save(anketler);
	}
}
