package com.spring.survey.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.survey.api.model.Secenekler;
import com.spring.survey.api.repository.SurveySecenekRepositoryCrud;

@Service
public class SurveySecenekService {

	private SurveySecenekRepositoryCrud surveySecenekCrud;
	
	@Autowired
	public SurveySecenekService(SurveySecenekRepositoryCrud surveySecenekCrud) {
		this.surveySecenekCrud = surveySecenekCrud;
	}
	
	public Secenekler saveSecenekler(Secenekler secenek) {
        return surveySecenekCrud.save(secenek);
    }
}
