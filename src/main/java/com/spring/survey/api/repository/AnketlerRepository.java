package com.spring.survey.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.survey.api.model.Anketler;

public interface AnketlerRepository extends JpaRepository<Anketler, Integer>{
	
	@Query("SELECT c FROM Anketler c where c.id in (SELECT surveyId FROM UserSurvey where userId=?1)")
	List<Anketler> findById(int userId);
	
	@Query("SELECT anketAdi FROM Anketler where id=?1")
	String findByAnketId(int anketId);
	
	@Query("SELECT id FROM Anketler where id in(SELECT surveyId FROM UserSurvey where userId=?1)")
	List<Integer> findAnketId(int anketId);
}
