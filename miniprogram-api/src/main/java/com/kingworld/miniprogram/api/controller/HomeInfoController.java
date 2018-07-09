package com.kingworld.miniprogram.api.controller;

import com.kingworld.miniprogram.api.entity.RESTful;
import com.kingworld.miniprogram.api.service.HomeInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "首页")
@RestController
public class HomeInfoController {

    @Autowired
    private HomeInfoService homeInfoService;

    @ApiOperation(value = "首页默认数据")
    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public RESTful index() {
        return homeInfoService.getIndex();
    }
}
