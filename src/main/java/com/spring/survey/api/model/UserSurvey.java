package com.spring.survey.api.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="userSurvey")
public class UserSurvey {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	
	@Column(name = "user_id")
    private int userId;
	
	@Column(name = "survey_id")
    private int surveyId;
	
	public int getUserId() {
		return userId;
	}
	public void SetUserId(int id) {
		this.userId = id;
	}
	public int getSurveyId() {
		return surveyId;
	}
	public void SetSurveyId(int id) {
		this.surveyId = id;
	}
	public UserSurvey(int userId, int surveyId) {
		super();
		this.userId = userId;
		this.surveyId = surveyId;
	}
	
}
