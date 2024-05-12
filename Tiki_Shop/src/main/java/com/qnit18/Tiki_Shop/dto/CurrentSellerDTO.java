package com.qnit18.Tiki_Shop.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CurrentSellerDTO {
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

    // Constructors, getters, and setters
}
