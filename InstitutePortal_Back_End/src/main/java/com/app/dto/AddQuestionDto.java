package com.app.dto;

import java.util.List;

import com.app.pojos.Options;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddQuestionDto {
	private String subject;
	private String question;
	private List<Options> optionlist;
	
}
