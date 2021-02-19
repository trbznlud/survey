package com.spring.survey.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.spring.survey.api.model.Cevaplar;
import com.spring.survey.api.repository.SurveyCevapAltSeceneklerRepositoryCrud;
import com.spring.survey.api.repository.SurveyCevapSeceneklerRepositoryCrud;

@Controller
public class AnswersController {

	@Autowired
	SurveyCevapSeceneklerRepositoryCrud cevapSeceneklerRepository;
	@Autowired
	SurveyCevapAltSeceneklerRepositoryCrud cevapAltSeceneklerRepository;

	@GetMapping(value = "/admin/surveys/answers/{id}")
	public String viewAnswers(@PathVariable("id") int surveyId, Model model) {
		List<String> cevapId = cevapSeceneklerRepository.findByAnketIdAnswersId(surveyId);
		List<String> sorularId = cevapSeceneklerRepository.findByAnketQuestionId(surveyId);
		
		List<String> sorular = new ArrayList<String>();
		for (int i = 0; i < sorularId.size(); i++) {
			sorular.addAll(cevapSeceneklerRepository.findByAnketIdQuestion(Integer.parseInt(sorularId.get(i))));
		}
		List<Cevaplar> cevaplar = new ArrayList<Cevaplar>();
		List<String> cevap = new ArrayList<>();
		for (int j = 0; j < cevapId.size(); j++) {
			cevap.addAll(cevapSeceneklerRepository.findByAnketIdAnswers(cevapId.get(j)));
		}
		List<Integer> cevapCount = new ArrayList<Integer>();
		for (int k = 0; k < sorularId.size(); k++) {
			cevapCount.add(cevapSeceneklerRepository.findByAnketIdAnswersCount(surveyId, sorularId.get(k)));
		}
		List<Double> cevapYüzde = new ArrayList<Double>();
		for (int l = 0; l < cevap.size(); l++) {
			double yüzde;
			int sayi = 0;
			for (int j = 0; j < cevap.size(); j++) {
				if (cevap.get(l).equals(cevap.get(j)) && sorularId.get(l).equals(sorularId.get(j))) {
					sayi++;
				} else
					continue;
			}
			yüzde = ((100 * sayi) / cevapCount.get(l));
			cevapYüzde.add(yüzde);
		}
		for (int j = 0; j < cevap.size(); j++) {
			Cevaplar c = new Cevaplar("Ana Soru :" + sorular.get(j), cevapCount.get(j), cevap.get(j),
					"%" + cevapYüzde.get(j).toString());
			cevaplar.add(c);
		}
		/////////////////////////////////////////////////////////////////////////////////////////
		List<String> altCevapId = cevapAltSeceneklerRepository.altFindByAnketIdAnswersId(surveyId);
		List<String> altSorularId = cevapAltSeceneklerRepository.altFindByAnketQuestionId(surveyId);
		List<String> altSorular = new ArrayList<String>();
		for (int i = 0; i < altSorularId.size(); i++) {
			altSorular.addAll(
					cevapAltSeceneklerRepository.altFindByAnketIdQuestion(Integer.parseInt(altSorularId.get(i))));
		}
		List<Cevaplar> altCevaplar = new ArrayList<Cevaplar>();
		List<String> altCevap = new ArrayList<>();
		for (int j = 0; j < altCevapId.size(); j++) {
			altCevap.addAll(cevapAltSeceneklerRepository.altFindByAnketIdAnswers(altCevapId.get(j)));
		}
		List<Integer> altCevapCount = new ArrayList<Integer>();
		for (int k = 0; k < altSorularId.size(); k++) {
			altCevapCount.add(cevapAltSeceneklerRepository.altFindByAnketIdAnswersCount(surveyId, altSorularId.get(k)));
		}
		List<Double> altCevapYüzde = new ArrayList<Double>();
		if (altCevap.get(0).equals("boş")) {
			altCevaplar = null;
		} else {
			for (int l = 0; l < altCevap.size(); l++) {
				double yüzde;
				int sayi = 0;
				for (int j = 0; j < altCevap.size(); j++) {
					if (altCevap.get(l).equals(altCevap.get(j)) && altSorularId.get(l).equals(altSorularId.get(j))) {
						sayi++;
					} else
						continue;
				}
				yüzde = ((100 * sayi) / altCevapCount.get(l));
				altCevapYüzde.add(yüzde);
			}
			for (int j = 0; j < altCevap.size(); j++) {
				Cevaplar c = new Cevaplar("Alt Soru :" + altSorular.get(j), altCevapCount.get(j), altCevap.get(j),
						"%" + altCevapYüzde.get(j).toString());
				altCevaplar.add(c);
			}
		}
		model.addAttribute("Answers", cevaplar);
		model.addAttribute("Answers2", altCevaplar);
		return "admin/answers";
	}
}
