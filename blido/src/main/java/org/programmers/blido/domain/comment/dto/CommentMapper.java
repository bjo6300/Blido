package org.programmers.blido.domain.comment.dto;

import lombok.RequiredArgsConstructor;
import org.programmers.blido.domain.comment.Comment;
import org.programmers.blido.domain.presentation.Presentation;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CommentMapper {

  public Comment toEntity(Presentation presentation, CommentRequest commentRequest) {
    return Comment.builder()
        .presentation(presentation)
        .name(commentRequest.name())
        .content(commentRequest.content())
        .isChecked(commentRequest.isChecked())
        .build();
  }

  public CommentResponse toResponse(Comment comment) {
    return CommentResponse.builder()
        .presentation(comment.getPresentation())
        .name(comment.getName())
        .content(comment.getContent())
        .isChecked(comment.getIsChecked())
        .build();
  }
}
