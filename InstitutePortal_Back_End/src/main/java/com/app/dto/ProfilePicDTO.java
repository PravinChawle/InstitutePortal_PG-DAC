package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfilePicDTO {

	private int id;
	private MultipartFile profilePic;
		
}
