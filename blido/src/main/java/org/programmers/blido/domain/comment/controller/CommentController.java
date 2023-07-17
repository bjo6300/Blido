package org.programmers.blido.domain.comment.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.programmers.blido.domain.comment.dto.CommentRequest;
import org.programmers.blido.domain.comment.dto.CommentResponse;
import org.programmers.blido.domain.comment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class CommentController {

  private final CommentService commentService;

  @PostMapping(path = "/comments", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<CommentResponse> createComment(
      @Valid @RequestBody CommentRequest commentRequest) {

    return ResponseEntity.status(HttpStatus.CREATED)
        .body(commentService.createComment(commentRequest));
  }

  @PutMapping("/comments/{commentId}")
  public ResponseEntity<CommentResponse> updateComment(
      @Valid @PathVariable Long commentId,
      @Valid @RequestBody CommentRequest commentRequest) {

    return ResponseEntity.status(HttpStatus.OK)
        .body(commentService.updateComment(commentId, commentRequest));
  }

  @PutMapping("/comments/check/{commentId}")
  public ResponseEntity<CommentResponse> checkComment(
      @Valid @PathVariable Long commentId) {

    return ResponseEntity.status(HttpStatus.OK)
        .body(commentService.checkComment(commentId));
  }

}
