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
        .writer(commentRequest.writer())
        .content(commentRequest.content())
        .isChecked(commentRequest.isChecked())
        .build();
  }

  public CommentResponse toResponse(Comment comment) {
    return CommentResponse.builder()
        .presentationId(comment.getPresentation().getId())
        .writer(comment.getWriter())
        .content(comment.getContent())
        .isChecked(comment.getIsChecked())
        .build();
  }
}
