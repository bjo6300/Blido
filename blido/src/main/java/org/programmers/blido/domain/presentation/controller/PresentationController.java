package org.programmers.blido.domain.presentation.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.programmers.blido.domain.presentation.dto.request.PresentationCreateRequest;
import org.programmers.blido.domain.presentation.dto.response.PresentationResponse;
import org.programmers.blido.domain.presentation.service.PresentationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class PresentationController {

  private final PresentationService presentationService;

  @PostMapping(path = "/presentation", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<PresentationResponse> createPresentation(
      @Valid @RequestBody PresentationCreateRequest presentationCreateRequest) {

    return ResponseEntity.status(HttpStatus.CREATED)
        .body(presentationService.createPresentation(presentationCreateRequest));
  }
}
