package com.kingworld.miniprogram.admin.service;

import com.kingworld.miniprogram.admin.entity.RESTful;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserService {

    public RESTful login(Map<String, Object> map) {

//        map.containsKey()

        return RESTful.Success();
    }
}
