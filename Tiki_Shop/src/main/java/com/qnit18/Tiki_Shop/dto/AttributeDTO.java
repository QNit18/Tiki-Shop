package com.qnit18.Tiki_Shop.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AttributeDTO {
    private String code;
    private String name;
    private String value;

    // Constructors, getters, and setters
}
