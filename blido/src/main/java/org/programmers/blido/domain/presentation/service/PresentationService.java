package org.programmers.blido.domain.presentation.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.programmers.blido.domain.presentation.Presentation;
import org.programmers.blido.domain.presentation.dto.mapper.PresentationMapper;
import org.programmers.blido.domain.presentation.dto.request.PresentationRequest;
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
      PresentationRequest presentationRequest) {

    Presentation presentation = presentationMapper.toEntity(presentationRequest);

    return presentationMapper.toResponse(presentationRepository.save(presentation));
  }

  @Transactional
  public PresentationResponse updatePresentation(Long presentationId,
      PresentationRequest presentationRequest) {

    Presentation foundPresentation = presentationRepository.findById(presentationId)
        .orElseThrow(EntityNotFoundException::new);

    foundPresentation.update(presentationRequest);

    return presentationMapper.toResponse(presentationRepository.save(foundPresentation));
  }

  @Transactional
  public void deletePresentation(Long presentationId) {

    Presentation foundPresentation = presentationRepository.findById(presentationId)
        .orElseThrow(EntityNotFoundException::new);

    presentationRepository.delete(foundPresentation);
  }

  @Transactional(readOnly = true)
  public PresentationResponse getPresentation(Long presentationId) {

    Presentation foundPresentation = presentationRepository.findById(presentationId)
        .orElseThrow(EntityNotFoundException::new);

    return presentationMapper.toResponse(foundPresentation);
  }
}
