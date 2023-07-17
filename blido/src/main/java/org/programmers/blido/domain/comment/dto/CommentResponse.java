package org.programmers.blido.domain.comment.dto;

import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record CommentResponse(Long commentId,
                              Long presentationId,
                              String writer,
                              String content,
                              Boolean isChecked,
                              LocalDateTime createdDate

) {

}
