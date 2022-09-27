package com.app.dto;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionListDTO {
	private int id;
	private String question;
	private int quizId;
	private List<OptionsDTO> options;
	
}
