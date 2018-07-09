package com.kingworld.miniprogram.api.service;

import com.kingworld.miniprogram.api.entity.GoodsCategory;
import com.kingworld.miniprogram.api.entity.RESTful;
import com.kingworld.miniprogram.api.mapper.GoodsCategoryMapper;
import com.kingworld.miniprogram.api.mapper.GoodsInfoMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GoodsInfoService {

    @Autowired
    private GoodsCategoryMapper goodsCategoryMapper;

    @Autowired
    private GoodsInfoMapper goodsInfoMapper;

    private Log logger = LogFactory.getLog(this.getClass());

    public RESTful getIndex() {
        try {

            List<GoodsCategory> goodsCategoryList = goodsCategoryMapper.selectAll();
            if (!goodsCategoryList.isEmpty()) {
                for (GoodsCategory goodsCategory:goodsCategoryList) {
                    // 暂时每次都取数据库，后期优化一次性取出
                    goodsCategory.setGoodsInfoList(goodsInfoMapper.selectByCategoryId(goodsCategory.getId()));
                }
            }

            // 包装一次
            Map<String, Object> map = new HashMap<>();
            map.put("goods", goodsCategoryList);

            return RESTful.Success(map);

        } catch (Exception e) {
            logger.error("商品默认数据获取异常");
            return RESTful.SystemException();
        }
    }
}
