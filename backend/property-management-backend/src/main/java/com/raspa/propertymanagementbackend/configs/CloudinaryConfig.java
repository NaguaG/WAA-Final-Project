package com.raspa.propertymanagementbackend.configs;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
            "cloud_name", "teachmandu",
            "api_key", "899411832567111",
            "api_secret", "McY8dYae9ZF2gJwJvVCSQnZL4MQ"));

    public Cloudinary getCloudinary() {
        return cloudinary;
    }

    public void setCloudinary(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }
}


