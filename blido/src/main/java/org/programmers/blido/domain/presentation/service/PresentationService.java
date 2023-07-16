package org.programmers.blido.domain.presentation.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.programmers.blido.domain.presentation.Presentation;
import org.programmers.blido.domain.presentation.dto.mapper.PresentationMapper;
import org.programmers.blido.domain.presentation.dto.request.PresentationCreateRequest;
import org.programmers.blido.domain.presentation.dto.response.PresentationResponse;
import org.programmers.blido.domain.presentation.repository.PresentationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Slf4j
public class PresentationService {

  private final PresentationRepository presentationRepository;
  private final PresentationMapper presentationMapper;

  @Transactional
  public PresentationResponse createPresentation(
      PresentationCreateRequest presentationCreateRequest) {

    Presentation presentation = presentationMapper.toEntity(presentationCreateRequest);
    
    return presentationMapper.toResponse(presentationRepository.save(presentation));
  }
}
