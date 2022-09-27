package com.app.dto;

import java.io.InputStream;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecordingDTO {
	
	private int id;
	private MultipartFile recLink;
	private String moduleName;
	private String topicname;
	
	private InputStream stream;

}
