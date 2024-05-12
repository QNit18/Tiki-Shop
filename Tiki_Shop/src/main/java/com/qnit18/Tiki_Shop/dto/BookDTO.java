package com.qnit18.Tiki_Shop.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookDTO {
    AuthorDTO authors;
    String bookCover;
    CategoryDTO category;
    CurrentSellerDTO currentSeller;
    String description;
    List<ImageDTO> images;
    Integer listPrice;
    String name;
    String originalPrice;
    QuantitySoldDTO quantitySold;
    Float ratingAverage;
    String shortDescription;
    List<AttributeDTO> attributes;
}

