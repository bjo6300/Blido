package org.programmers.blido.domain.presentation.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.Builder;
import org.springframework.format.annotation.DateTimeFormat;

@Builder
public record PresentationCreateRequest(@NotBlank String title, @NotNull
@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm") LocalDateTime startAt,
                                        @NotNull
                                        @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm") LocalDateTime endAt) {

}
