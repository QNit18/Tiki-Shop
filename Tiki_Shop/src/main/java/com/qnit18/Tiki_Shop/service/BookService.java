package com.qnit18.Tiki_Shop.service;

import com.qnit18.Tiki_Shop.dto.BookDTO;
import com.qnit18.Tiki_Shop.entity.*;
import com.qnit18.Tiki_Shop.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public void addBook(BookDTO bookDTO){
        // Chuyển đổi từ BookDTO sang đối tượng Book
        Book book = convertToEntity(bookDTO);
        bookRepository.save(book);
    }

    private Book convertToEntity(BookDTO bookDTO) {
        Book book = new Book();

        // Chuyển đổi dữ liệu từ BookDTO sang Book
        book.setName(bookDTO.getName());
        book.setBook_cover(bookDTO.getBookCover());
        book.setDescription(bookDTO.getDescription());
        book.setListPrice(bookDTO.getListPrice());
        book.setOriginalPrice(bookDTO.getOriginalPrice());
        book.setRatingAverage(bookDTO.getRatingAverage());
        book.setShortDescription(bookDTO.getShortDescription());

        Author author = new Author();
        author.setId(bookDTO.getAuthors().getId());
        author.setSlug(bookDTO.getAuthors().getSlug());
        author.setName(bookDTO.getAuthors().getName());

        // Chuyển đổi các đối tượng liên quan
        // 1. CategoryDTO sang Category
        Category category = new Category();
        category.setId(bookDTO.getCategory().getId());
        category.setName(bookDTO.getCategory().getName());
        // Gán Category cho Book
        book.setCategory(category);

        // 2. CurrentSellerDTO sang CurrentSeller
        CurrentSeller currentSeller = new CurrentSeller();
        currentSeller.setId(bookDTO.getCurrentSeller().getId());
        currentSeller.setName(bookDTO.getCurrentSeller().getName());
        currentSeller.setSku(bookDTO.getCurrentSeller().getSku());
        currentSeller.setLink(bookDTO.getCurrentSeller().getLink());
        currentSeller.setLogo(bookDTO.getCurrentSeller().getLogo());
        currentSeller.setPrice(bookDTO.getCurrentSeller().getPrice());
        currentSeller.setProductId(bookDTO.getCurrentSeller().getProductId());
        currentSeller.setStoreId(bookDTO.getCurrentSeller().getStoreId());
        currentSeller.setBestStore(bookDTO.getCurrentSeller().isBestStore());
        currentSeller.setIsOfflineInstallmentSupported(bookDTO.getCurrentSeller().getIsOfflineInstallmentSupported());
        // Gán CurrentSeller cho Book
        book.setCurrentSeller(currentSeller);

        // 3. QuantitySoldDTO sang QuantitySold
        QuantitySold quantitySold = new QuantitySold();
        quantitySold.setText(bookDTO.getQuantitySold().getText());
        quantitySold.setValue(bookDTO.getQuantitySold().getValue());
        // Gán QuantitySold cho Book
        book.setQuantitySold(quantitySold);

        Image image = new Image();
        image

        // Các bước tương tự cho các đối tượng còn lại

        return book;
    }
}
