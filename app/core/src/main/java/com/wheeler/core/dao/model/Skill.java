package com.wheeler.core.dao.model;

import com.wheeler.core.dao.constant.SkillLevel;
import com.wheeler.core.dao.model.contract.Entity;
import lombok.Data;

import java.util.List;

@Data
public class Skill implements Entity {

    private String id;
    private String name;
    private SkillLevel level;
    private List<String> projects;
    private String type;
}