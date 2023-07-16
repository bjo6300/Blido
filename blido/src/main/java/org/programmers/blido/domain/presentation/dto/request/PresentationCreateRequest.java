package org.programmers.blido.domain.presentation.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record PresentationCreateRequest(@JsonProperty String title, LocalDateTime startAt,
                                        LocalDateTime endAt) {

}
