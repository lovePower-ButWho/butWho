package com.lovePower.butWho.domain.result;

import com.lovePower.butWho.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResultRepository extends JpaRepository<Result,Long> {
    boolean existsByUserAndTargetId(User user,Integer targetId);

    Optional<Result> findByUserAndTargetId(User user,Integer targetId);

}
