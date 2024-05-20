package com.qnit18.Tiki_Shop.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "current_seller")
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sku;
    private String name;
    private String link;
    private String logo;
    private double price;
    private String productId;
    private long storeId;
    private boolean isBestStore;
    private Boolean isOfflineInstallmentSupported;
}
