package com.spring.survey.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.survey.api.model.AltSorular;
import com.spring.survey.api.repository.SurveyAltSoruRepositoryCrud;

@Service
public class SurveyAltSoruService {

	private SurveyAltSoruRepositoryCrud surveyAltSoruRepositoryCrud;
	
	@Autowired
	public SurveyAltSoruService(SurveyAltSoruRepositoryCrud surveyAltSoruRepositoryCrud) {
		this.surveyAltSoruRepositoryCrud = surveyAltSoruRepositoryCrud;
	}
	
	public AltSorular saveAltSorular(AltSorular altSoru) {
        return surveyAltSoruRepositoryCrud.save(altSoru);
    }
}
