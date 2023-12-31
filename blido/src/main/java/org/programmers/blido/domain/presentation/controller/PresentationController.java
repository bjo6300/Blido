package org.programmers.blido.domain.presentation.controller;

import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.programmers.blido.domain.presentation.dto.PresentationRequest;
import org.programmers.blido.domain.presentation.dto.PresentationResponse;
import org.programmers.blido.domain.presentation.service.PresentationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class PresentationController {

  private final PresentationService presentationService;

  @PostMapping(path = "/presentations", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<PresentationResponse> createPresentation(
      @Valid @RequestBody PresentationRequest presentationRequest) {

    return ResponseEntity.status(HttpStatus.CREATED)
        .body(presentationService.createPresentation(presentationRequest));
  }

  @PutMapping("/presentations/{presentationId}")
  public ResponseEntity<PresentationResponse> updatePresentation(
      @Valid @PathVariable Long presentationId,
      @Valid @RequestBody PresentationRequest presentationRequest) {

    return ResponseEntity.status(HttpStatus.OK)
        .body(presentationService.updatePresentation(presentationId, presentationRequest));
  }

  @DeleteMapping("/presentations/{presentationId}")
  public ResponseEntity<String> deletePresentation(@Valid @PathVariable Long presentationId) {

    presentationService.deletePresentation(presentationId);

    return ResponseEntity.status(HttpStatus.OK)
        .body("발표가 삭제되었습니다.");
  }

  @GetMapping("/presentations/{presentationId}")
  public ResponseEntity<PresentationResponse> getPresentation(
      @Valid @PathVariable Long presentationId) {

    return ResponseEntity.status(HttpStatus.OK)
        .body(presentationService.getPresentation(presentationId));
  }

  @GetMapping("/presentations/list")
  public ResponseEntity<List<PresentationResponse>> getPresentation(
      @Valid @RequestParam(defaultValue = "0") int page,
      @Valid @RequestParam(defaultValue = "10") int size) {

    return ResponseEntity.status(HttpStatus.OK)
        .body(presentationService.getPresentations(page, size));
  }
}
