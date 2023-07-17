package org.programmers.blido.domain.comment.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record CommentRequest(@NotNull Long presentationId,
                             String name,
                             @NotBlank String content,
                             @NotNull Boolean isChecked
) {

}
