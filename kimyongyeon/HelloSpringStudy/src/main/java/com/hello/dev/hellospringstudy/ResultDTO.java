package com.hello.dev.hellospringstudy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ResultDTO {
    public static Map<String, Object> result(List<Person> list) {
        Map<String, Object> map = new HashMap<>();
        map.put("list", list);
        return map;
    }
}
