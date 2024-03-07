package com.lovePower.butWho.domain.result;


import com.lovePower.butWho.domain.user.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;

@Getter
@Entity
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id = null;

    @Column(name = "target_id")
    private Integer targetId = null;

    @Column(length = 4)
    private String mbti = null;

    @Column(name = "love_power")
    private Integer lovePower = null;

    @JoinColumn(name = "email")
    @ManyToOne
    private User user;

    @Builder
    public Result(Integer targetId, String mbti, Integer lovePower, User user) {
        this.targetId = targetId;
        this.mbti = mbti;
        this.lovePower = lovePower;
        this.user = user;
    }
    protected Result(){

    }

}