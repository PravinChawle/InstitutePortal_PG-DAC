package com.app.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.*;

import org.springframework.stereotype.*;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Subject {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int quizId;
	private String subject;	
	
	@OneToMany(mappedBy = "quizId" ,cascade = CascadeType.ALL)
	//@OneToMany(mappedBy = "quizId" ,cascade = CascadeType.MERGE)
	private List<Question> questions;    
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	private LocalDate date;
}
