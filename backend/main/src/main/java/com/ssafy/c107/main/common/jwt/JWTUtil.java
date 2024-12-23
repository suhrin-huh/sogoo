package com.ssafy.c107.main.common.jwt;

import com.ssafy.c107.main.domain.members.entity.MemberRole;
import com.ssafy.c107.main.domain.members.entity.Token;
import com.ssafy.c107.main.domain.members.repository.TokenRepository;
import io.jsonwebtoken.Jwts;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Date;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Jwts.SIG;


@Component
public class JWTUtil {

    private SecretKey secretKey;
    private final TokenRepository tokenRepository;

    public JWTUtil(@Value("${spring.jwt.secret}") String secret, TokenRepository tokenRepository) {
        secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8),
            SIG.HS256.key().build().getAlgorithm());
        this.tokenRepository = tokenRepository;
    }

    private String removeBearerPrefix(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            return token.substring(7);  // "Bearer " 이후의 실제 토큰 부분만 반환
        }
        return token;
    }

    public String getEmail(String token) {
        token = removeBearerPrefix(token);
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload()
            .get("email", String.class);
    }

    public String getRole(String token) {
        token = removeBearerPrefix(token);
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload()
            .get("role", String.class);
    }

    public String getCategory(String token) {
        token = removeBearerPrefix(token);
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload()
            .get("category", String.class);
    }

    public Long getUserId(String token) {
        token = removeBearerPrefix(token);
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload()
            .get("userId", Long.class);
    }

    public Boolean isExpired(String token) {
        token = removeBearerPrefix(token);
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload()
            .getExpiration().before(new Date());
    }


    //토근 생성 -> 우리껄로 변경해야함
    public String createJwt(String category, String email, MemberRole role, Long expiredMs,
        Long userId) {

        return Jwts.builder()
            .claim("category", category)
            .claim("email", email)
            .claim("role", role)
            .claim("userId", userId)
            .issuedAt(new Date(System.currentTimeMillis()))
            .expiration(new Date(System.currentTimeMillis() + expiredMs))
            .signWith(secretKey)
            .compact();
    }

    public String createRefreshToken(Long id, String category, String email, MemberRole role,
        Long expiredMs, Long userId) {
        String refreshToken = Jwts
            .builder()
            .claim("id", id)
            .claim("category", category)
            .claim("email", email)
            .claim("role", role)
            .claim("userId", userId)
            .issuedAt(new Date(System.currentTimeMillis()))
            .expiration(new Date(System.currentTimeMillis() + expiredMs))
            .signWith(secretKey)
            .compact();

        Token token = new Token(id, refreshToken);
        tokenRepository.save(token);
        return refreshToken;
    }
}
