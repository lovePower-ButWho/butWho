package com.lovePower.butWho.domain.user;

import com.lovePower.butWho.domain.result.Result;
import com.lovePower.butWho.error.CustomException;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.Collection;
import java.util.Collections;
import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import static com.lovePower.butWho.error.ErrorCode.NOT_COMPLETED;

@Entity(name = "\"user\"")
@Getter
@Setter
public class User implements UserDetails {

    @Getter
    @Id
    @NotBlank(message = "이메일을 입력해주세요.")
    @Email(message = "이메일 형식을 맞춰주세요.")
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "nick_name")
    private String nickName;

    @Column(name = "authority")
    private int authority;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Result> allResults = new ArrayList<>();

    @Builder
    public User(String email, String password, String nickName, int authority) {
        this.email = email;
        this.password = password;
        this.nickName = nickName;
        this.authority = authority;
    }

    public User() {
        this.email = null;
        this.password = null;
        this.nickName = null;
        this.authority = -1;
    }

    public void save(Result result) {
        this.allResults.add(result);
    }

    public void clear() {
        if (allResults.size() < 3) {
            throw new CustomException(NOT_COMPLETED);
        }
        allResults.clear();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return switch (this.authority) {
            case 1 -> Collections.singleton(new SimpleGrantedAuthority("ROLE_ADMIN"));
            default -> Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
        };
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
