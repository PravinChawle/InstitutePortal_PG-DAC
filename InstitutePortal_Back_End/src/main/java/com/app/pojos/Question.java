package com.app.pojos;

import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String question;
	@ManyToOne(cascade =CascadeType.ALL)
	//@ManyToOne(cascade =CascadeType.MERGE)
	@JoinColumn
	private Subject quizId;
	@OneToMany(mappedBy = "que_id",cascade =CascadeType.ALL)
	//@OneToMany(mappedBy = "que_id",cascade =CascadeType.MERGE)
	private List<Options> options;
	
}


