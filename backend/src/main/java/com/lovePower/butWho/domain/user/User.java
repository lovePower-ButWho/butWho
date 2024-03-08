package com.lovePower.butWho.domain.user;

import com.lovePower.butWho.domain.result.Result;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity(name = "user")
@Getter
@Setter
public class User implements UserDetails {

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

    //각 유저가 결과를 가짐
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Result> allResults = new ArrayList<>();

    @Builder
    public User(String email, String password, String nickName, int authority) {
        this.email = email;
        this.password = password;
        this.nickName = nickName;
        this.authority = authority;
    }

    public User() {
    }

    //결과저장
    public void save(Result result) {
        this.allResults.add(result);
    }

    public void clear() {
        //TODO 전부 다 클리어하지 않았을 경우 예외처리
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
        return this.nickName;
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
