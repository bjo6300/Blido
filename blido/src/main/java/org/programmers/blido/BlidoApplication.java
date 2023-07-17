package org.programmers.blido;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BlidoApplication {

  public static void main(String[] args) {
    SpringApplication.run(BlidoApplication.class, args);
  }
}
