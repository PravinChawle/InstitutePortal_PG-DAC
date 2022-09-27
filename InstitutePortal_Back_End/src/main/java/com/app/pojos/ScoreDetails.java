package com.app.pojos;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ManyToAny;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ScoreDetails {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int scoreId;
	private LocalDate date;
	private int score;
	@OneToOne
	@JoinColumn
	private User userID;
	@OneToOne
	@JoinColumn
	private Subject quizId;
   
}
