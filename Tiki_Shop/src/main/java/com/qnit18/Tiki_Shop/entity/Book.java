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
    Integer id;

    @ManyToOne
    Author authors;

    String book_cover;

    @ManyToOne
    Category category;

    @ManyToOne
    @JoinColumn(name = "current_seller_id")
    CurrentSeller currentSeller;

    String description;

    @OneToMany(cascade = CascadeType.ALL)
    List<Image> image;

    @Column(name = "list_price")
    Integer listPrice;

    String name;

    @Column(name = "original_price")
    String originalPrice;

    @ManyToOne
    @JoinColumn(name = "quantity_sold")
    QuantitySold quantitySold;

    @Column(name = "rating_average")
    Float ratingAverage;

    @Column(name = "short_description")
    String shortDescription;

    @OneToMany(cascade = CascadeType.ALL)
    List<Attribute> attributes;
}
