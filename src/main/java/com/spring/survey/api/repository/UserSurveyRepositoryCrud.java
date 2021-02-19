package com.spring.survey.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.UserSurvey;

public interface UserSurveyRepositoryCrud extends CrudRepository<UserSurvey, Integer>{

}
