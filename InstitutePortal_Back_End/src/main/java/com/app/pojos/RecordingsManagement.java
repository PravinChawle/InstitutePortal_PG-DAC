package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.*;

import org.hibernate.annotations.Type;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class RecordingsManagement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int recNo;
	@Column(length = 100)
	@Type(type = "text")
	private String moduleName;
	private String recLink;
	private String topicName;
	private String objectId;
	private LocalDate uploadDate;
	@OneToOne
	private User user;

}
