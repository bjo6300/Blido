package org.programmers.blido.domain.presentation.dto.response;

import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record PresentationResponse(Long id, String title, LocalDateTime startAt,
                                   LocalDateTime endAt) {

}
