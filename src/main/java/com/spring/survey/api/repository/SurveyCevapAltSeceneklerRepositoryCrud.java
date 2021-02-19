package com.spring.survey.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.CevapAltSecenekler;

public interface SurveyCevapAltSeceneklerRepositoryCrud extends CrudRepository<CevapAltSecenekler, Integer>{

	@Query("SELECT c FROM CevapAltSecenekler c where c.anket_id=?1")
	List<CevapAltSecenekler> altFindByAnketId(int surveyId);
	
	@Query("SELECT altCevap FROM CevapAltSecenekler where cevapAltSoruId=?1")
	List<String> altFindByAnketIdAnswers(String cevapId);

	@Query("SELECT cevapAltSoruId FROM CevapAltSecenekler where anket_id=?1 ORDER BY cevapAltSoruId ASC")
	List<String> altFindByAnketQuestionId(int anketId);
	
	@Query("SELECT COUNT(*) FROM CevapAltSecenekler where anket_id=?1 and cevapAltSoruId =?2")
	Integer altFindByAnketIdAnswersCount(int surveyId,String soruId);
	
	@Query("SELECT altSoru FROM AltSorular where id=?1")
	List<String> altFindByAnketIdQuestion(int anketId);
	
	@Query("SELECT DISTINCT cevapAltSoruId FROM CevapAltSecenekler where anket_id=?1")
	List<String> altFindByAnketIdAnswersId(int anketId);
}
