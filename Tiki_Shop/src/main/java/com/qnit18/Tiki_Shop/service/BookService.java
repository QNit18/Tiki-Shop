package com.qnit18.Tiki_Shop.service;


import com.qnit18.Tiki_Shop.entity.*;
import com.qnit18.Tiki_Shop.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookById(Long bookId){
        return bookRepository.findById(bookId).get();
    }

    public List<Book> listAllBook(){
        return bookRepository.findAll();
    }

    public Page<Book> getAllBook(String name, PageRequest pageRequest){
        return bookRepository.searchBooks(name, pageRequest);
    }
}
