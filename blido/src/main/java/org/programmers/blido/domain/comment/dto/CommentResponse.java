package org.programmers.blido.domain.comment.dto;

import lombok.Builder;
import org.programmers.blido.domain.presentation.Presentation;

@Builder
public record CommentResponse(Presentation presentation,
                              String name,
                              String content,
                              Boolean isChecked
) {

}
