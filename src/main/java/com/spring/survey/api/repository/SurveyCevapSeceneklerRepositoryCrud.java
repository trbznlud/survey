package com.spring.survey.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.CevapSecenekler;

public interface SurveyCevapSeceneklerRepositoryCrud extends CrudRepository<CevapSecenekler, Integer>{

	@Query("SELECT c FROM CevapSecenekler c where c.anket_id=?1")
	List<CevapSecenekler> findByAnketId(int surveyId);
	
	@Query("SELECT cevap FROM CevapSecenekler where cevapSoruId=?1")
	List<String> findByAnketIdAnswers(String cevapId);

	@Query("SELECT cevapSoruId FROM CevapSecenekler where anket_id=?1 ORDER BY cevapSoruId ASC")
	List<String> findByAnketQuestionId(int anketId);
	
	@Query("SELECT COUNT(*) FROM CevapSecenekler where anket_id=?1 and cevapSoruId =?2")
	Integer findByAnketIdAnswersCount(int surveyId,String soruId);
	
	@Query("SELECT soru FROM Sorular where id=?1")
	List<String> findByAnketIdQuestion(int anketId);
	
	@Query("SELECT DISTINCT cevapSoruId FROM CevapSecenekler where anket_id=?1")
	List<String> findByAnketIdAnswersId(int anketId);
}
