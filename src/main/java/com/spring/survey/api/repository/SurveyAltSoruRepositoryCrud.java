package com.spring.survey.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.AltSorular;

public interface SurveyAltSoruRepositoryCrud extends CrudRepository<AltSorular, Long>{

	@Query("SELECT c FROM AltSorular c where c.id in(SELECT altSoruId FROM SeceneklerAltSorular where secenekId in (SELECT secenekId FROM SorularSecenekler where soruId in"
			+ "(SELECT soruId FROM AnketlerSorular where anketId=?1)))")
	
	List<AltSorular> findById(int soruId);
}
