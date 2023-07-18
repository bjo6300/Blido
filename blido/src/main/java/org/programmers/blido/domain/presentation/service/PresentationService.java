package org.programmers.blido.domain.presentation.service;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.programmers.blido.domain.presentation.Presentation;
import org.programmers.blido.domain.presentation.dto.PresentationMapper;
import org.programmers.blido.domain.presentation.dto.PresentationRequest;
import org.programmers.blido.domain.presentation.dto.PresentationResponse;
import org.programmers.blido.domain.presentation.repository.PresentationRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
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

    presentationRepository.deleteById(presentationId);
  }

  @Transactional(readOnly = true)
  public PresentationResponse getPresentation(Long presentationId) {

    Presentation foundPresentation = presentationRepository.findById(presentationId)
        .orElseThrow(EntityNotFoundException::new);

    return presentationMapper.toResponse(foundPresentation);
  }

  @Transactional(readOnly = true)
  public List<PresentationResponse> getPresentations(int page, int size) {
    PageRequest pageRequest = PageRequest.of(page, size);

    return presentationRepository.findPresentationsByIdOrderById(pageRequest)
        .stream()
        .map(presentationMapper::toResponse)
        .toList();
  }
}
