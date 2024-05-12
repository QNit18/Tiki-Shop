package com.qnit18.Tiki_Shop.repo;

import com.qnit18.Tiki_Shop.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {
}
