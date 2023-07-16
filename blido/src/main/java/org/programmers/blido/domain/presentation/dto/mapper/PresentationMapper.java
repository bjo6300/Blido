package org.programmers.blido.domain.presentation.dto.mapper;

import lombok.RequiredArgsConstructor;
import org.programmers.blido.domain.presentation.Presentation;
import org.programmers.blido.domain.presentation.dto.request.PresentationCreateRequest;
import org.programmers.blido.domain.presentation.dto.response.PresentationResponse;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PresentationMapper {

  public Presentation toEntity(PresentationCreateRequest presentationCreateRequest) {
    return Presentation.builder()
        .title(presentationCreateRequest.title())
        .startAt(presentationCreateRequest.startAt())
        .endAt(presentationCreateRequest.endAt())
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
