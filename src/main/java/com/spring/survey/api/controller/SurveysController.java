package com.spring.survey.api.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.spring.survey.api.model.Anketler;
import com.spring.survey.api.model.User;
import com.spring.survey.api.repository.AnketlerRepository;
import com.spring.survey.api.repository.SurveyAnketCevapRepositoryCrud;
import com.spring.survey.api.service.UserService;

@Controller
public class SurveysController {

	@Autowired
    private UserService userService;
	@Autowired
	AnketlerRepository anketRepository;
	@Autowired
	SurveyAnketCevapRepositoryCrud anketCevapRepository;
	
	@GetMapping(value="/admin/surveys")
	public String viewSurveys(Model model) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByUserName(auth.getName());
	    List<Anketler> anketler = anketRepository.findById(user.getId());
	    List<Integer> sayi = anketRepository.findAnketId(user.getId());
	    HashMap<Anketler, Integer> anket = new HashMap<Anketler, Integer>();
	    for(int i=0;i<sayi.size();i++) {
	    	anket.put(anketler.get(i), anketCevapRepository.findByAnketId(sayi.get(i)));
	    }
	    model.addAttribute("Anketler", anket);
	    return "admin/surveys";
	}
}
