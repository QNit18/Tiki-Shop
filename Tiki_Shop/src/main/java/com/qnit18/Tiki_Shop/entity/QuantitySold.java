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
@Table(name = "original_price")
public class QuantitySold {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    Integer id;

    String text;

    Integer value;
}
