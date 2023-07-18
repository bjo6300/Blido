package org.programmers.blido.domain.comment;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import java.util.Objects;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.programmers.blido.domain.comment.dto.CommentRequest;
import org.programmers.blido.domain.presentation.Presentation;
import org.programmers.blido.global.BaseTimeEntity;

@Getter
@Entity
@Table(name = "comment")
@Where(clause = "is_deleted = false")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "update comment set is_deleted = true where presentation_id = ?")
public class Comment extends BaseTimeEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "comment_id")
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "presentation_id")
  private Presentation presentation;

  @Column(nullable = false)
  @NotBlank
  private String writer;

  @Column(nullable = false)
  @NotBlank
  private String content;

  @Column(name = "is_checked", nullable = false)
  private Boolean isChecked;

  @Column(name = "is_deleted", nullable = false)
  private boolean isDeleted;

  @Builder
  public Comment(Presentation presentation, String writer, String content, Boolean isChecked) {
    this.presentation = presentation;
    this.writer = writer;
    this.content = content;
    this.isChecked = isChecked;
  }

  @PrePersist
  public void prePersist() {
    this.writer = Objects.equals(this.writer, "") ? "익명" : this.writer;
  }

  public void update(CommentRequest commentRequest) {
    this.writer = commentRequest.writer();
    this.content = commentRequest.content();
  }

  public void check() {
    this.isChecked = !this.isChecked;
  }

  public void delete() {
    this.isDeleted = true;
  }
}
