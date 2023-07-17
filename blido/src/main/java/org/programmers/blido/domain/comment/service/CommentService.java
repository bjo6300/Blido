package org.programmers.blido.domain.comment.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.programmers.blido.domain.comment.Comment;
import org.programmers.blido.domain.comment.dto.CommentMapper;
import org.programmers.blido.domain.comment.dto.CommentRequest;
import org.programmers.blido.domain.comment.dto.CommentResponse;
import org.programmers.blido.domain.comment.repository.CommentRepository;
import org.programmers.blido.domain.presentation.Presentation;
import org.programmers.blido.domain.presentation.repository.PresentationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CommentService {

  private final CommentRepository commentRepository;
  private final CommentMapper commentMapper;
  private final PresentationRepository presentationRepository;

  @Transactional
  public CommentResponse createComment(CommentRequest commentRequest) {
    Presentation foundPresentation = presentationRepository.findById(
            commentRequest.presentationId())
        .orElseThrow(EntityNotFoundException::new);

    Comment comment = commentMapper.toEntity(foundPresentation, commentRequest);

    return commentMapper.toResponse(commentRepository.save(comment));
  }
}