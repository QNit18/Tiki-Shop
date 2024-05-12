package com.qnit18.Tiki_Shop.entity;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "base_url", length = 2048)
    private String baseUrl;

    @Column(name = "is_gallery")
    private Boolean isGallery;

    private String label;

    @Column(name = "large_url", length = 2048)
    private String largeUrl;

    @Column(name = "medium_url", length = 2048)
    private String mediumUrl;

    private Integer position;

    @Column(name = "small_url", length = 2048)
    private String smallUrl;

    @Column(name = "thumbnail_url", length = 2048)
    private String thumbnailUrl;

}