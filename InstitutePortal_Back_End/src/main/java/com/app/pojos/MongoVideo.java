package com.app.pojos;

import java.io.InputStream;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MongoVideo {
	
	private String title;
	private InputStream stream;

}
