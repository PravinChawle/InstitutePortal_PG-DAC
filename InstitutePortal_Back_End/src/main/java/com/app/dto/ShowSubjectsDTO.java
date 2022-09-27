package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowSubjectsDTO {
	
	private int quizId;
	private String subject;
	private String facname;
	private LocalDate date;
	
}
