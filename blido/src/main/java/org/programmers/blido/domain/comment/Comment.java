package org.programmers.blido.domain.comment;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.programmers.blido.domain.presentation.Presentation;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@Entity
@Table(name = "comment")
@Where(clause = "is_deleted = false")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "update comment set is_deleted = true where presentation_id = ?")
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "comment_id")
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "presentation_id")
  private Presentation presentation;

  @Column(nullable = false)
  @NotBlank
  private String name;

  @Column(nullable = false)
  @NotBlank
  private String content;

  @Column(name = "is_checked", nullable = false)
  private boolean isChecked;

  @Column(nullable = false)
  @NotNull
  @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
  private LocalDateTime createAt;

  @Column(name = "is_deleted", nullable = false)
  private boolean isDeleted;
}
