package org.programmers.blido.domain.comment.repository;

import java.util.List;
import org.programmers.blido.domain.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CommentRepository extends JpaRepository<Comment, Long> {

  @Query(nativeQuery = true, value = "select * from comment where presentation_id = :presentationId and is_deleted = false order by created_date")
  List<Comment> findCommentsByPresentationIdOrderByCreatedDate(Long presentationId);

  @Query(nativeQuery = true, value = "select * from comment where presentation_id = :presentationId and is_checked = false and is_deleted = false order by created_date")
  List<Comment> findCommentsByPresentationIdAndIsCheckedOrCreatedDate(Long presentationId);
}
