package com.spring.survey.api.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.spring.survey.api.model.AltSecenekler;
import com.spring.survey.api.model.AltSorular;
import com.spring.survey.api.model.AnketCevap;
import com.spring.survey.api.model.CevapAltSecenekler;
import com.spring.survey.api.model.CevapSecenekler;
import com.spring.survey.api.model.Secenekler;
import com.spring.survey.api.model.Sorular;
import com.spring.survey.api.repository.AnketlerRepository;
import com.spring.survey.api.repository.SurveyAltSecenekRepositoryCrud;
import com.spring.survey.api.repository.SurveyAltSoruRepositoryCrud;
import com.spring.survey.api.repository.SurveyAnketCevapRepositoryCrud;
import com.spring.survey.api.repository.SurveyCevapAltSeceneklerRepositoryCrud;
import com.spring.survey.api.repository.SurveyCevapSeceneklerRepositoryCrud;
import com.spring.survey.api.repository.SurveyRepository;
import com.spring.survey.api.repository.SurveySecenekRepositoryCrud;

@Controller
public class MySurveyController {

	@Autowired
	SurveyRepository sorularRepository;
	@Autowired
	AnketlerRepository anketlerRepository;
	@Autowired
	SurveySecenekRepositoryCrud seceneklerRepository;
	@Autowired
	SurveyAltSoruRepositoryCrud altSorularRepository;
	@Autowired
	SurveyAltSecenekRepositoryCrud altSeceneklerRepository;
	@Autowired
	SurveyCevapSeceneklerRepositoryCrud cevapSeceneklerRepository;
	@Autowired
	SurveyCevapAltSeceneklerRepositoryCrud cevapAltSeceneklerRepository;
	@Autowired
	SurveyAnketCevapRepositoryCrud anketCevapRepository;
	
	@GetMapping(value = "/admin/surveys/{id}")
	public String viewMySurvey(@PathVariable("id") int surveyId, Model model) {
		List<Sorular> sorular = sorularRepository.findById(surveyId);
		List<Secenekler> secenekler = seceneklerRepository.findById(surveyId);
		List<AltSorular> altSorular = altSorularRepository.findById(surveyId);
		List<AltSecenekler> altSecenekler = altSeceneklerRepository.findById(surveyId);
		String anketAdi = anketlerRepository.findByAnketId(surveyId);
		model.addAttribute("Sorular", sorular);
		model.addAttribute("Secenekler",secenekler);
		model.addAttribute("AltSorular",altSorular);
		model.addAttribute("AltSecenekler",altSecenekler);
		model.addAttribute("pageTitle", anketAdi);
		model.addAttribute("answer", "/"+surveyId);
		return "admin/mySurvey";
	}
	
	@PostMapping("/{id}")
    public ModelAndView createNewSurvey(@PathVariable("id") int surveyId,@ModelAttribute CevapSecenekler cevap,@ModelAttribute CevapAltSecenekler altCevap) {   
		ModelAndView modelAndView = new ModelAndView();
		if(altCevap.getAltCevap() == null) {
			altCevap = new CevapAltSecenekler();
			altCevap.setAltCevap("boş");
			altCevap.setCevapAltSecenekId("boş");
			altCevap.setAnket_id(surveyId);
			altCevap.setCevapAltSoruId("0");
		}
		List<String> cevapSoruId = new ArrayList<String>(Arrays.asList(cevap.getCevapSoruId().split(",")));
		List<String> cevapSecenekId = new ArrayList<String>(Arrays.asList(cevap.getCevapSecenekId().split(",")));
		List<String> cevapCevap = new ArrayList<String>(Arrays.asList(cevap.getCevap().split(",")));
		List<String> cevapAltSoruId = new ArrayList<String>(Arrays.asList(altCevap.getCevapAltSoruId().split(",")));
		List<String> cevapAltSeceneklerId = new ArrayList<String>(Arrays.asList(altCevap.getCevapAltSecenekId().split(",")));
		List<String> cevapAltSoru = new ArrayList<String>(Arrays.asList(altCevap.getAltCevap().split(",")));
		for(int i=0;i<cevapSoruId.size();i++) {
			String soruId = cevapSoruId.get(i);
			String secenekId = cevapSecenekId.get(i);
			String cevapp = cevapCevap.get(i);
			CevapSecenekler c = new CevapSecenekler(soruId, secenekId, cevapp,surveyId);
			List<CevapSecenekler> answers = Arrays.asList(c);
			cevapSeceneklerRepository.saveAll(answers);
		}
		for(int i=0;i<cevapAltSoruId.size();i++) {
			String altSoruId = cevapAltSoruId.get(i);
			String altSecenekId = cevapAltSeceneklerId.get(i);
			String altCevapp = cevapAltSoru.get(i);
			CevapAltSecenekler c = new CevapAltSecenekler(altSoruId, altSecenekId, altCevapp,surveyId);
			List<CevapAltSecenekler> answers = Arrays.asList(c);
			cevapAltSeceneklerRepository.saveAll(answers);
		}
		AnketCevap anketCevap = new AnketCevap(surveyId);
		List<AnketCevap> anketCevapList = Arrays.asList(anketCevap);
		anketCevapRepository.saveAll(anketCevapList);
		modelAndView.setViewName("admin/home");
		return modelAndView;
	}
}
