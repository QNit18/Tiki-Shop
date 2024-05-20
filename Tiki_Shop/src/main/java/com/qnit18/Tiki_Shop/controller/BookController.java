package com.qnit18.Tiki_Shop.controller;
import com.qnit18.Tiki_Shop.entity.Book;
import com.qnit18.Tiki_Shop.service.BookService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin("http://localhost:3000")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookService.saveBook(book);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id){
        Book book = bookService.getBookById(id);
        return ResponseEntity.ok(book);
    }

    @GetMapping("/all-book")
    public ResponseEntity<List<Book>> getAllProduct(){
        return ResponseEntity.ok(bookService.listAllBook());
    }

    @GetMapping("")
    public ResponseEntity<Page<Book>> getProducts(
            @RequestParam(defaultValue = "", name = "name") String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int limit
    ){
        PageRequest pageRequest =PageRequest.of(
                page, limit,
                Sort.by("id").ascending()
        );

        return ResponseEntity.ok(bookService.getAllBook(name, pageRequest));
    }

}
