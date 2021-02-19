package com.spring.survey.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.spring.survey.api.model.Sorular;

@Repository
public interface SurveyRepository extends JpaRepository<Sorular, Long>{
	
	@Query("SELECT c FROM Sorular c where c.id in (SELECT soruId FROM AnketlerSorular where anketId=?1)")
	List<Sorular> findById(int surveyId);
}
