package org.programmers.blido.domain.presentation.repository;

import java.util.List;
import org.programmers.blido.domain.presentation.Presentation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PresentationRepository extends JpaRepository<Presentation, Long> {
  @Query(nativeQuery = true, value = "select * from presentation where is_deleted = false order by presentation_id")
  Page<Presentation> findPresentationsByIdOrderById(Pageable pageable);
}
