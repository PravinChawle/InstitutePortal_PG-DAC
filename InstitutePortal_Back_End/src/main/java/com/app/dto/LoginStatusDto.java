package com.app.dto;

import javax.persistence.Column;

import org.hibernate.annotations.Type;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginStatusDto {
	
	private int portalId;
	private String name;
	private String surname;
	private String email;
	private String role;
	private String profilePic;
	private boolean emailExist;
	private boolean password;
	private boolean active;
	
}
