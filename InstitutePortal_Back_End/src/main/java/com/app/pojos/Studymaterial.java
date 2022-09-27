package com.app.pojos;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "fs.files")
public class Studymaterial{

	@Id
	private String _id;
	
}
