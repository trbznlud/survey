package com.spring.survey.api.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.AnketCevap;

public interface SurveyAnketCevapRepositoryCrud extends CrudRepository<AnketCevap, Integer>{

	@Query("SELECT COUNT(*) FROM AnketCevap where anketId=?1")
	Integer findByAnketId(int anketId);
}
