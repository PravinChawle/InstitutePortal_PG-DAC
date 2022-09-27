package com.app.dto;

import java.io.InputStream;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NotesDTO {
	
	private int notelink;
	private String topicName;
	private int id;
	private MultipartFile file;
	private InputStream stream;
	
}
