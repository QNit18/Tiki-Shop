package com.qnit18.Tiki_Shop.controller;

import com.qnit18.Tiki_Shop.dto.BookDTO;
import com.qnit18.Tiki_Shop.entity.Book;
import com.qnit18.Tiki_Shop.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public ResponseEntity<BookDTO> addProduct(@RequestBody BookDTO bookDTO){
        bookService.addBook(bookDTO);
        return ResponseEntity.ok(bookDTO);
    }
}
