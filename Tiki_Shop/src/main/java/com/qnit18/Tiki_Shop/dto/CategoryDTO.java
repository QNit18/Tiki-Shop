package com.qnit18.Tiki_Shop.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CategoryDTO {
    private Integer id;
    private String name;
    private boolean isLeaf;

    // Constructors, getters, and setters
}

