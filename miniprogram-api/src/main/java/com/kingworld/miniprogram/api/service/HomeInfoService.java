package com.kingworld.miniprogram.api.service;

import com.kingworld.miniprogram.api.entity.GoodsCategory;
import com.kingworld.miniprogram.api.entity.HomeBanner;
import com.kingworld.miniprogram.api.entity.RESTful;
import com.kingworld.miniprogram.api.mapper.GoodsCategoryMapper;
import com.kingworld.miniprogram.api.mapper.GoodsInfoMapper;
import com.kingworld.miniprogram.api.mapper.HomeBannerMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HomeInfoService {

    @Autowired
    private HomeBannerMapper homeBannerMapper;

    @Autowired
    private GoodsCategoryMapper goodsCategoryMapper;

    @Autowired
    private GoodsInfoMapper goodsInfoMapper;

    private Log logger = LogFactory.getLog(this.getClass());

    public RESTful getIndex() {
        try {

            List<HomeBanner> homeBannerList = homeBannerMapper.selectAll();

            GoodsCategory goodsCategory = goodsCategoryMapper.selectById(100000);
            goodsCategory.setGoodsInfoList(goodsInfoMapper.selectByCategoryId(goodsCategory.getId()));

            Map<String, Object> map = new HashMap<>();
            map.put("banner", homeBannerList);
            map.put("goods", goodsCategory);

            return RESTful.Success(map);

        } catch (Exception e) {
            logger.error("首页默认数据获取异常");
            return RESTful.SystemException();
        }
    }
}
