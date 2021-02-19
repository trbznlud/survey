package com.spring.survey.api.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.survey.api.model.UserSurvey;
import com.spring.survey.api.repository.UserSurveyRepositoryCrud;

@Service
@Transactional
public class UserSurveyService {
	@Autowired
	private UserSurveyRepositoryCrud userSurveyRepositoryCrud;
	
	@Autowired
	public UserSurveyService(UserSurveyRepositoryCrud userSurveyRepositoryCrud) {
		this.userSurveyRepositoryCrud = userSurveyRepositoryCrud;
	}
	
	public UserSurvey saveUserSurvey(UserSurvey userSurvey) {
		return userSurveyRepositoryCrud.save(userSurvey);
	}
}
