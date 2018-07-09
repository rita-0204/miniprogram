package com.kingworld.miniprogram.api.mapper;

import com.kingworld.miniprogram.api.entity.GoodsCategory;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface GoodsCategoryMapper {
    GoodsCategory selectById(Integer id);
    List<GoodsCategory> selectAll();
}
