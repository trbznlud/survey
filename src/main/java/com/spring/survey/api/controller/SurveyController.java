package com.spring.survey.api.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.spring.survey.api.model.AltSecenekler;
import com.spring.survey.api.model.AltSorular;
import com.spring.survey.api.model.AltSorularAltSecenekler;
import com.spring.survey.api.model.Anketler;
import com.spring.survey.api.model.AnketlerSorular;
import com.spring.survey.api.model.Secenekler;
import com.spring.survey.api.model.SeceneklerAltSorular;
import com.spring.survey.api.model.Sorular;
import com.spring.survey.api.model.SorularSecenekler;
import com.spring.survey.api.model.User;
import com.spring.survey.api.model.UserSurvey;
import com.spring.survey.api.repository.SurveyAltSecenekRepositoryCrud;
import com.spring.survey.api.repository.SurveyAltSoruRepositoryCrud;
import com.spring.survey.api.repository.SurveyAltSorularAltSeceneklerRepositoryCrud;
import com.spring.survey.api.repository.SurveyAnketRepositoryCrud;
import com.spring.survey.api.repository.SurveyAnketSorularRepositoryCrud;
import com.spring.survey.api.repository.SurveyRepositoryCrud;
import com.spring.survey.api.repository.SurveySecenekRepositoryCrud;
import com.spring.survey.api.repository.SurveySeceneklerAltSorularRepositoryCrud;
import com.spring.survey.api.repository.SurveySorularSeceneklerRepositoryCrud;
import com.spring.survey.api.repository.UserSurveyRepositoryCrud;
import com.spring.survey.api.service.SurveyAltSecenekService;
import com.spring.survey.api.service.SurveyAltSoruService;
import com.spring.survey.api.service.SurveyAnketService;
import com.spring.survey.api.service.SurveySecenekService;
import com.spring.survey.api.service.SurveyService;
import com.spring.survey.api.service.UserService;

@Controller
public class SurveyController {

	@Autowired
    private UserService userService;
	@Autowired
	private SurveyService surveyService;
	@Autowired
	private SurveyRepositoryCrud surveyRepositoryCrud;
	@Autowired
	private SurveySecenekRepositoryCrud surveySecenekRepositoryCrud;
	@Autowired
	private SurveySecenekService surveySecenekService;
	@Autowired
	private SurveyAltSoruRepositoryCrud surveyAltSoruRepositoryCrud;
	@Autowired
	private SurveyAltSoruService surveyAltSoruService;
	@Autowired
	private SurveyAltSecenekRepositoryCrud surveyAltSecenekRepositoryCrud;
	@Autowired
	private SurveyAltSecenekService surveyAltSecenekService;
	@Autowired
	private SurveyAnketRepositoryCrud surveyAnketRepositoryCrud;
	@Autowired
	private SurveyAnketService surveyAnketService;
	@Autowired
	private UserSurveyRepositoryCrud userSurveyRepositoryCrud;
	//@Autowired
	//private UserSurveyService userSurveyService;
	@Autowired
	private SurveyAnketSorularRepositoryCrud surveyAnketSorularRepositoryCrud;
	@Autowired
	private SurveySorularSeceneklerRepositoryCrud surveySorularSeceneklerRepositoryCrud;
	@Autowired
	private SurveySeceneklerAltSorularRepositoryCrud surveySeceneklerAltSorularRepositoryCrud;
	@Autowired
	private SurveyAltSorularAltSeceneklerRepositoryCrud surveyAltSorularAltSeceneklerRepositoryCrud;
	
	@PostMapping("/survey")
    public ModelAndView createNewSurvey(@Valid Secenekler secenek , @Valid Sorular soru , @Valid AltSorular altSoru , @Valid AltSecenekler altSecenek , @Valid Anketler anket) {   
		ModelAndView modelAndView = new ModelAndView();
		List<String> listSorular = new ArrayList<String>(Arrays.asList(soru.getSoru().split(",")));
		List<String> listSorularSayisi = new ArrayList<String>(Arrays.asList(soru.getSoruSayisi().split(",")));
		List<String> listSecenekler = new ArrayList<String>(Arrays.asList(secenek.getSecenek().split(",")));
		List<String> listSeceneklerTip = new ArrayList<String>(Arrays.asList(secenek.getSoruTip().split(",")));
		List<String> listSeceneklerSayisi = new ArrayList<String>(Arrays.asList(secenek.getSecenekSayisi().split(",")));
		List<String> listSeceneklerAltSayisi = new ArrayList<String>(Arrays.asList(secenek.getSecenekAlt().split(",")));
		if(altSoru.getAltSoru() == null || altSecenek.getAltSecenek() == null || altSecenek.getAltSoruTip() == null) {
			altSoru = new AltSorular();
			altSoru.setAltSoru("Boş");
			altSoru.setAltSoruSayisi("Boş");
			altSecenek = new AltSecenekler();
			altSecenek.setAltSecenek("Boş");
			altSecenek.setAltSoruTip("Boş");
			altSecenek.setAltSecenekSayisi("Boş");
		}
		List<String> listAltSecenekler = new ArrayList<String>(Arrays.asList(altSecenek.getAltSecenek().split(",")));
		List<String> listAltSeceneklerTip = new ArrayList<String>(Arrays.asList(altSecenek.getAltSoruTip().split(",")));
		List<String> listAltSeceneklerSayisi = new ArrayList<String>(Arrays.asList(altSecenek.getAltSecenekSayisi().split(",")));
		List<String> listAltSorular = new ArrayList<String>(Arrays.asList(altSoru.getAltSoru().split(",")));
		List<String> listAltSorularSayisi = new ArrayList<String>(Arrays.asList(altSoru.getAltSoruSayisi().split(",")));
		//List<String> listAnketler = new ArrayList<String>(Arrays.asList(anket.getAnketAdi(),anket.getAnketAlani()));
		HashMap<String, String> listAnketler = new HashMap<String, String>();
		listAnketler.put("ad", anket.getAnketAdi());
		listAnketler.put("alan", anket.getAnketAlani());
		for(int i=0;i<listAnketler.size()-1;i++) {
			surveyAnketService.saveAnketler(anket);
			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	        User user = userService.findUserByUserName(auth.getName());
	        UserSurvey userSurvey = new UserSurvey(user.getId(),anket.getId());
	        //userSurveyService.saveUserSurvey(userSurvey); şuanlık servisler gerekmiyor ama ileride lazım olabilir
	        List<UserSurvey> listUserSurvey = Arrays.asList(userSurvey);
	        userSurveyRepositoryCrud.saveAll(listUserSurvey);
			String strAd = listAnketler.get("ad");
			String strAlan = listAnketler.get("alan");
			int sayi = anket.getId();
			Anketler c = new Anketler(sayi+i,strAd,strAlan);
			List<Anketler> surveys = Arrays.asList(c);
			surveyAnketRepositoryCrud.saveAll(surveys);
		}
		for(int i=0;i<listSorular.size();i++) {
			surveyService.saveSorular(soru);
			String strSoru = listSorular.get(i);
			int sayi = soru.getId();
			String soruSayisi = listSorularSayisi.get(i);
			AnketlerSorular anketSorular = new AnketlerSorular(anket.getId(), sayi+i);
			Sorular c = new Sorular(sayi+i,strSoru,soruSayisi);
			List<Sorular> surveys = Arrays.asList(c);
			surveyRepositoryCrud.saveAll(surveys);
			surveyAnketSorularRepositoryCrud.save(anketSorular);
		}
		for(int i=0;i<listSecenekler.size();i++) {
			surveySecenekService.saveSecenekler(secenek);
			String strSecenek = listSecenekler.get(i);
			String strSoruTip = listSeceneklerTip.get(i);
			String strSoruSayisi = listSeceneklerSayisi.get(i);
			String strSecenekSayisi = listSeceneklerAltSayisi.get(i);
			int sayi = secenek.getId();
			//SorularSecenekler sorularSecenekler = new SorularSecenekler();
			Secenekler c = new Secenekler(sayi+i,strSecenek,strSoruTip,strSoruSayisi,strSecenekSayisi);
			//System.out.println(Integer.parseInt(strSoruSayisi));
			List<Secenekler> surveys = Arrays.asList(c);
			surveySecenekRepositoryCrud.saveAll(surveys);
		}
		for(int j=0;j<listSorularSayisi.size();j++) {
			for(int k=0;k<listSeceneklerSayisi.size();k++) {
				if(listSorularSayisi.get(j).equals(listSeceneklerSayisi.get(k))) {
					SorularSecenekler sorularSecenekler = new SorularSecenekler(soru.getId()+j, secenek.getId()+k);
					List<SorularSecenekler> surveys = Arrays.asList(sorularSecenekler);
					surveySorularSeceneklerRepositoryCrud.saveAll(surveys);
				}
				else
					continue;
			}
		}
		for(int i=0;i<listAltSorular.size();i++) {
			surveyAltSoruService.saveAltSorular(altSoru);
			String str = listAltSorular.get(i);
			String strSayi = listAltSorularSayisi.get(i);
			int sayi = altSoru.getId();
			AltSorular c = new AltSorular(sayi+i,str,strSayi);
			List<AltSorular> surveys = Arrays.asList(c);
			surveyAltSoruRepositoryCrud.saveAll(surveys);
		}
		for(int j=0;j<listSeceneklerAltSayisi.size();j++) {
			for(int k=0;k<listAltSorularSayisi.size();k++) {
				if(listSeceneklerAltSayisi.get(j).equals(listAltSorularSayisi.get(k))) {
					SeceneklerAltSorular sorularSecenekler = new SeceneklerAltSorular(secenek.getId()+j, altSoru.getId()+k);
					List<SeceneklerAltSorular> surveys = Arrays.asList(sorularSecenekler);
					surveySeceneklerAltSorularRepositoryCrud.saveAll(surveys);
				}
				else
					continue;
			}
		}
		for(int i=0;i<listAltSecenekler.size();i++) {
			surveyAltSecenekService.saveAltSecenekler(altSecenek);
			String strSecenek = listAltSecenekler.get(i);
			String strSoruTip = listAltSeceneklerTip.get(i);
			String strSecenekSayisi = listAltSeceneklerSayisi.get(i);
			int sayi = altSecenek.getId();
			AltSecenekler c = new AltSecenekler(sayi+i,strSecenek,strSoruTip,strSecenekSayisi);
			List<AltSecenekler> surveys = Arrays.asList(c);
			surveyAltSecenekRepositoryCrud.saveAll(surveys);
		}
		for(int j=0;j<listAltSorularSayisi.size();j++) {
			for(int k=0;k<listAltSeceneklerSayisi.size();k++) {
				if(listAltSorularSayisi.get(j).equals(listAltSeceneklerSayisi.get(k))) {
					AltSorularAltSecenekler sorularSecenekler = new AltSorularAltSecenekler(altSoru.getId()+j, altSecenek.getId()+k);
					List<AltSorularAltSecenekler> surveys = Arrays.asList(sorularSecenekler);
					surveyAltSorularAltSeceneklerRepositoryCrud.saveAll(surveys);
				}
				else
					continue;
			}
		}
		modelAndView.setViewName("admin/home");
		return modelAndView;
    }
}
