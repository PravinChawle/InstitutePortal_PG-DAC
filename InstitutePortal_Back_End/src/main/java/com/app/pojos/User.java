package com.app.pojos;
import java.util.List;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.Type;
import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	@Column
	private String name;
	@Column(length = 1000)
	@Type(type="text")
	private String password;
	@Column
	private String surname;
	@Column(unique = true)
	private String email;
	@Column
	private String role;//faculty//student//admin
	@Column
	private String profilePic;
	@Column
	private boolean isActive;
	
	
	
}
