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
@Table(name = "current_seller")
public class CurrentSeller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String sku;
    private String link;
    private String logo;
    private double price;
    private String productId;
    private Long storeId;
    private boolean isBestStore;
    private Boolean isOfflineInstallmentSupported;
}
