package org.programmers.blido.domain.presentation;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "presentation")
@SQLDelete(sql = "UPDATE presentation set deleted = true where id=?")
public class Presentation {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "presentation_id")
  private Long id;

  @Column(nullable = false)
  @NotBlank
  private String title;

  @Column(nullable = false)
  @NotNull
  @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
  private LocalDateTime startAt;

  @Column(nullable = false)
  @NotNull
  @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
  private LocalDateTime endAt;

  @Builder
  public Presentation(String title, LocalDateTime startAt, LocalDateTime endAt) {
    this.title = title;
    this.startAt = startAt;
    this.endAt = endAt;
  }
}
