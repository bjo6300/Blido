package org.programmers.blido.domain.presentation.dto;

import lombok.RequiredArgsConstructor;
import org.programmers.blido.domain.presentation.Presentation;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PresentationMapper {

  public Presentation toEntity(PresentationRequest presentationRequest) {
    return Presentation.builder()
        .title(presentationRequest.title())
        .startAt(presentationRequest.startAt())
        .endAt(presentationRequest.endAt())
        .build();
  }

  public PresentationResponse toResponse(Presentation presentation) {
    return PresentationResponse.builder()
        .id(presentation.getId())
        .title(presentation.getTitle())
        .startAt(presentation.getStartAt())
        .endAt(presentation.getEndAt())
        .build();
  }
}
