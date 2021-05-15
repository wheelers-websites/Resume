package com.wheeler.dao.constant;

import com.wheeler.dto.model.partial.EnumDto;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public enum CertificationLevel {

    ASSOCIATE(
        "one year of experience solving problems and implementing solutions using the aws cloud",
        "Associate",
        2
    ),
    FOUNDATIONAL(
        "six months of fundamental aws cloud and industry knowledge",
        "Foundational",
        1
    ),
    PROFESSIONAL(
        "two years of comprehensive experience designing, operating, and troubleshooting solutions using the aws cloud",
        "Professional",
        4
    ),
    SPECIALTY(
        "technical aws cloud experience in the specialty domain as specified in the exam guide",
        "Specialty",
        3
    );

    private final String description;
    private final String display;
    private final int rank;

    CertificationLevel(final String description, final String display, final int rank) {
        this.description = description;
        this.display = display;
        this.rank = rank;
    }

    public String getDescription() {
        return description;
    }

    public String getDisplay() {
        return display;
    }

    public int getRank() {
        return rank;
    }

    public static List<EnumDto> dto(){
        return Arrays.stream(CertificationLevel.values())
                .map(EnumDto::new)
                .collect(Collectors.toList());
    }
}
