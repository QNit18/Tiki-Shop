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
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class Specification {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    Integer id;

    String name;

    @OneToMany(mappedBy = "specification", cascade = CascadeType.ALL)
    List<Attribute> attributes;
}
