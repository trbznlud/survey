package com.spring.survey.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.spring.survey.api.model.AltSecenekler;

public interface SurveyAltSecenekRepositoryCrud extends CrudRepository<AltSecenekler, Long>{

	@Query("SELECT c FROM AltSecenekler c where c.id in"
			+ "(SELECT altSecenekId FROM AltSorularAltSecenekler where altSoruId in"
			+ "(SELECT altSoruId FROM SeceneklerAltSorular where secenekId in "
			+ "(SELECT secenekId FROM SorularSecenekler where soruId in"
			+ "(SELECT soruId FROM AnketlerSorular where anketId=?1))))")
	
	List<AltSecenekler> findById(int soruId);
}
