package org.programmers.blido.domain.presentation.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.Builder;
import org.springframework.format.annotation.DateTimeFormat;

@Builder
public record PresentationUpdateRequest(
    @NotNull Long id,
    @NotBlank String title,
    @NotNull @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm") @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul") LocalDateTime startAt,
    @NotNull @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm") @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul") LocalDateTime endAt) {

}
