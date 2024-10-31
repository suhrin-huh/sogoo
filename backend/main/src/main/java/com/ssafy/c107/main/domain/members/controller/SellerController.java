package com.ssafy.c107.main.domain.members.controller;

import com.ssafy.c107.main.domain.members.dto.CustomUserDetails;
import com.ssafy.c107.main.domain.members.service.SellerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/member/seller")
@RequiredArgsConstructor
public class SellerController {

    private final SellerService sellerService;

    @GetMapping("/sales-status/{storeId}")
    public ResponseEntity<?> getSellerSellStatus(@PathVariable(name = "storeId") Long storeId,
        @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        if (!customUserDetails.getUserRole().getRole().equals("SELLER")) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("구매자는 접근 불가핑!");
        }
        return ResponseEntity.ok(sellerService.getSalesStatus(storeId));
    }

    @GetMapping("/monthly-sales/{storeId}")
    public ResponseEntity<?> getMonthlySales(@PathVariable(name = "storeId") Long storeId, @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        if (!customUserDetails.getUserRole().getRole().equals("SELLER")) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("구매자는 접근 불가핑!");
        }
        return null;
    }
}
