package com.kingworld.miniprogram.admin.controller;

import com.kingworld.miniprogram.admin.entity.RESTful;
import com.kingworld.miniprogram.admin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        return "login";
    }


    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public RESTful login(Map<String, Object> map) {
        return userService.login(map);
    }
}
