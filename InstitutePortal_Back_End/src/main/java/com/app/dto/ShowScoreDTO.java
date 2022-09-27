package com.app.dto;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowScoreDTO {
	
	private String name;
	private int score;
	private LocalDate date;
		
}
