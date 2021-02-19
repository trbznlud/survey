package com.spring.survey.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.Sorular;

public interface SurveyRepositoryCrud extends CrudRepository<Sorular, Long> {

}
