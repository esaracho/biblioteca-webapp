package com.G25.bibliog25;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends JpaRepository<Books, Long>{
	
	List<Books> findByTitleContaining(String title);
	List<Books> findByAuthorContaining(String author);
	List<Books> findByCategoryContaining(String category);

}