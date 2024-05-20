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
@Table(name = "quantity_sold")
public class QuantitySold {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    Integer id;
    private String text;
    private int value;
}
