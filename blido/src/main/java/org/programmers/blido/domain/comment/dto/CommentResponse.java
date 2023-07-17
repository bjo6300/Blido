package org.programmers.blido.domain.comment.dto;

import lombok.Builder;

@Builder
public record CommentResponse(Long presentationId,
                              String writer,
                              String content,
                              Boolean isChecked

) {

}
