package com.kingworld.miniprogram.api.controller;

import com.kingworld.miniprogram.api.entity.RESTful;
import com.kingworld.miniprogram.api.service.GoodsInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "商品")
@RestController
public class GoodsInfoController {

    @Autowired
    private GoodsInfoService goodsInfoService;

    @ApiOperation(value = "商品默认数据")
    @RequestMapping(value = "/goods", method = RequestMethod.GET)
    public RESTful index() {
        return goodsInfoService.getIndex();
    }
}
