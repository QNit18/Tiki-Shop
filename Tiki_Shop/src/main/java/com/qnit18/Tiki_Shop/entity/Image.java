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
    @Column(name = "base_url")
    private String base_url;

    @Column(name = "is_gallery")
    private boolean is_gallery;

    private String label;

    @Column(name = "large_url")
    private String large_url;

    @Column(name = "medium_url")
    private String medium_url;

    @Column(name = "small_url")
    private String small_url;

    @Column(name = "thumbnail_url")
    private String thumbnail_url;

    private Integer position;
}