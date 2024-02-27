package com.lovePower.butWho;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ButWhoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ButWhoApplication.class, args);
	}

}
