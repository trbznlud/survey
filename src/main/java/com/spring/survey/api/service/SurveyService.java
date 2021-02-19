package com.spring.survey.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.survey.api.model.Sorular;
import com.spring.survey.api.repository.SurveyRepository;

@Service
public class SurveyService{
	private SurveyRepository surveyRepository;

	@Autowired
	public SurveyService(SurveyRepository surveyRepository) {
		this.surveyRepository = surveyRepository;
	}
	
	public Sorular saveSorular(Sorular soru) {
        return surveyRepository.save(soru);
    }
}
