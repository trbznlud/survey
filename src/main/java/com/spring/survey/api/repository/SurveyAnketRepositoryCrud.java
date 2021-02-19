package com.spring.survey.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.Anketler;

public interface SurveyAnketRepositoryCrud extends CrudRepository<Anketler, Long>{

}
