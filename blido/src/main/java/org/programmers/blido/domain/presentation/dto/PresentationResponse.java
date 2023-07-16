package org.programmers.blido.domain.presentation.dto;

import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record PresentationResponse(Long id, String title, LocalDateTime startAt,
                                   LocalDateTime endAt) {

}
