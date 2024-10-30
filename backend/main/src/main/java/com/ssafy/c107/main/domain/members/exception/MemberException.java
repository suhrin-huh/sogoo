package com.ssafy.c107.main.domain.members.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum MemberException {
    MEMBER_NOT_FOUND("해당 멤버를 찾지 못했습니다.", HttpStatus.NOT_FOUND.value()),
    MEMBER_IS_EXIST("이미 존재하는 이메일입니다.", HttpStatus.CONFLICT.value()),
    SELLER_NOT_FOUND("해당 번호의 사업자를 찾지 못했습니다.", HttpStatus.UNAUTHORIZED.value()),
    ;

    private final String message;
    private final int code;

    MemberException(String message, int code) {
        this.message = message;
        this.code = code;
    }
}
