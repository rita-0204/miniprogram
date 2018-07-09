package com.kingworld.miniprogram.api.mapper;

import com.kingworld.miniprogram.api.entity.HomeBanner;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface HomeBannerMapper {
    List<HomeBanner> selectAll();
}
