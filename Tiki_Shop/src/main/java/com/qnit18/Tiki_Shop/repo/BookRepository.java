package com.qnit18.Tiki_Shop.repo;

import com.qnit18.Tiki_Shop.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT b FROM Book b " +
            "WHERE b.name LIKE %:name%")
    Page<Book> searchBooks(@Param("name") String name, Pageable pageable);

}
