package org.programmers.blido.domain.comment.service;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
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
        commentRequest.presentationId()).orElseThrow(EntityNotFoundException::new);

    Comment comment = commentMapper.toEntity(foundPresentation, commentRequest);

    return commentMapper.toResponse(commentRepository.save(comment));
  }

  @Transactional
  public CommentResponse updateComment(Long commentId, CommentRequest commentRequest) {

    Comment foundComment = commentRepository.findById(commentId)
        .orElseThrow(EntityNotFoundException::new);

    foundComment.update(commentRequest);

    return commentMapper.toResponse(commentRepository.save(foundComment));
  }

  @Transactional
  public CommentResponse checkComment(Long commentId) {

    Comment foundComment = commentRepository.findById(commentId)
        .orElseThrow(EntityNotFoundException::new);

    foundComment.check();

    return commentMapper.toResponse(commentRepository.save(foundComment));
  }

  @Transactional
  public void deleteComment(Long commentId) {

    Comment foundComment = commentRepository.findById(commentId)
        .orElseThrow(EntityNotFoundException::new);

    foundComment.delete();
  }

  @Transactional(readOnly = true)
  public CommentResponse getComment(Long commentId) {

    Comment foundComment = commentRepository.findById(commentId)
        .orElseThrow(EntityNotFoundException::new);

    return commentMapper.toResponse(foundComment);
  }

  @Transactional(readOnly = true)
  public List<CommentResponse> getLatestComments(Long presentationId) {
    return commentRepository.findCommentsByPresentationIdOrderByCreatedDate(presentationId)
        .stream()
        .map(commentMapper::toResponse)
        .toList();
  }

  @Transactional(readOnly = true)
  public List<CommentResponse> getCheckedComments(Long presentationId) {
    return commentRepository.findCommentsByPresentationIdAndIsCheckedOrCreatedDate(presentationId)
        .stream()
        .map(commentMapper::toResponse)
        .toList();
  }
}
