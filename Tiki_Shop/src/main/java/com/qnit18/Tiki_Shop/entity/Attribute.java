package com.qnit18.Tiki_Shop.entity;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class Attribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String code;
    String name;
    String value;

    @ManyToOne
    @JoinColumn(name = "specification_id")
    private Specification specification;
}
