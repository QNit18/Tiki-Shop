package com.qnit18.Tiki_Shop.repo;

import com.qnit18.Tiki_Shop.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
