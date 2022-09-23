package com.raspa.propertymanagementbackend;

import com.raspa.propertymanagementbackend.entities.User;
import com.raspa.propertymanagementbackend.entities.security.Role;
import com.raspa.propertymanagementbackend.repositories.RoleRepository;
import com.raspa.propertymanagementbackend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class PropertyManagementBackendApplication implements CommandLineRunner {

	private final UserRepository userRepository;
	private final RoleRepository roleRepository;

	public static void main(String[] args) {
		SpringApplication.run(PropertyManagementBackendApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
	}
}
