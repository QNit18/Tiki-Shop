package com.qnit18.Tiki_Shop.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String bookCover;
    private String description;
    private double listPrice;
    private double originalPrice;
    private double ratingAverage;
    private String shortDescription;
    // other fields

    @OneToMany(cascade = CascadeType.ALL)
    private List<Author> authors;

    @OneToOne(cascade = CascadeType.ALL)
    private Category categories;

    @OneToOne(cascade = CascadeType.ALL)
    private Seller currentSeller;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Image> images;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Specification> specifications;

    @OneToOne(cascade = CascadeType.ALL)
    private QuantitySold quantitySold;
}
