package com.spring.survey.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.Secenekler;

public interface SurveySecenekRepositoryCrud extends CrudRepository<Secenekler, Long> {

	@Query("SELECT c FROM Secenekler c where c.id in (SELECT secenekId FROM SorularSecenekler where soruId in(SELECT soruId FROM AnketlerSorular where anketId=?1))")
	List<Secenekler> findById(int soruId);
}
