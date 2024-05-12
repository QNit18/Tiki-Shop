package com.qnit18.Tiki_Shop.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ImageDTO {
    private String baseUrl;
    private boolean isGallery;
    private String label;
    private String largeUrl;
    private String mediumUrl;
    private String position;
    private String smallUrl;
    private String thumbnailUrl;

    // Constructors, getters, and setters
}

