package com.qnit18.Tiki_Shop.controller;

import com.qnit18.Tiki_Shop.entity.*;
import com.qnit18.Tiki_Shop.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/insert")
public class AllControllerInsert {
    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private AttributeRepository attributeRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private QuantitySoldRepository quantitySoldRepository;

    @Autowired
    private SpecificationRepository specificationRepository;

    @PostMapping("/authors")
    public ResponseEntity<Author> addAuthor(@RequestBody Author author){
        Author author1 = authorRepository.save(author);
        return ResponseEntity.ok(author1);
    }

    @PostMapping("/categories")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        return ResponseEntity.ok(categoryRepository.save(category));
    }

    @PostMapping("/seller")
    public ResponseEntity<Seller> addSeller(@RequestBody Seller seller){
        return ResponseEntity.ok(sellerRepository.save(seller));
    }

    @PostMapping("/image")
    public ResponseEntity<Image> addImage(@RequestBody Image image){
        return ResponseEntity.ok(imageRepository.save(image));
    }

    @PostMapping("/quantity_sold")
    public ResponseEntity<QuantitySold> addSeller(@RequestBody QuantitySold quantitySold){
        return ResponseEntity.ok(quantitySoldRepository.save(quantitySold));
    }

    @PostMapping("/specifications")
    public ResponseEntity<Specification> addSpec(@RequestBody Specification specification){
        return ResponseEntity.ok(specificationRepository.save(specification));
    }

    @PostMapping("/attributes")
    public ResponseEntity< List<Attribute>> addAttri(@RequestBody List<Attribute> attributes){
        return ResponseEntity.ok(attributeRepository.saveAll(attributes));
    }

}
