package com.spring.survey.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.survey.api.model.AltSecenekler;
import com.spring.survey.api.repository.SurveyAltSecenekRepositoryCrud;

@Service
public class SurveyAltSecenekService {

	private SurveyAltSecenekRepositoryCrud surveyAltSecenekRepositoryCrud;
	
	@Autowired
	public SurveyAltSecenekService(SurveyAltSecenekRepositoryCrud surveyAltSecenekRepositoryCrud) {
		this.surveyAltSecenekRepositoryCrud = surveyAltSecenekRepositoryCrud;
	}
	
	public AltSecenekler saveAltSecenekler(AltSecenekler altSecenek) {
        return surveyAltSecenekRepositoryCrud.save(altSecenek);
    }
}
