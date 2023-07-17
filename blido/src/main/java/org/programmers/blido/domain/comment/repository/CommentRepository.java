package org.programmers.blido.domain.comment.repository;

import java.util.List;
import org.programmers.blido.domain.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

  List<Comment> findCommentsByPresentationIdOrderByCreatedDate(Long presentationId);
}
