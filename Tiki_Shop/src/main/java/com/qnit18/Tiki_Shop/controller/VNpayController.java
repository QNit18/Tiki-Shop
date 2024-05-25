package com.qnit18.Tiki_Shop.controller;

import com.qnit18.Tiki_Shop.configVNPay.VNPAYService;
import com.qnit18.Tiki_Shop.dto.ApiResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin("http://localhost:3000")
public class VNpayController {

    @Autowired
    private VNPAYService vnPayService;

    @GetMapping("/submitOrder")
    public ResponseEntity<ApiResponse> submitOrder(@RequestParam("amount") int orderTotal,
                                                   @RequestParam("orderInfo") String orderInfo,
                                                   HttpServletRequest request) {
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        String vnpayUrl = vnPayService.createOrder(request, orderTotal, orderInfo, baseUrl);

        ApiResponse response = new ApiResponse(HttpStatus.OK.value(), vnpayUrl);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/vnpay-payment-return")
    public void paymentCompleted(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String vnp_ResponseCode = request.getParameter("vnp_ResponseCode");
        String vnp_TransactionStatus = request.getParameter("vnp_TransactionStatus");

        // Kiểm tra mã phản hồi và trạng thái giao dịch
        if ("00".equals(vnp_ResponseCode) && "00".equals(vnp_TransactionStatus)) {
            // Thanh toán thành công
            response.sendRedirect("http://localhost:3000/complete");
        } else {
            // Thanh toán thất bại
            response.sendRedirect("http://localhost:3000/orderfail");
        }
    }
}