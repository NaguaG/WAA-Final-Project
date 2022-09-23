package com.raspa.propertymanagementbackend.configs;

import com.raspa.propertymanagementbackend.security.jwt.JwtTokenAuthorizationOncePerRequestFilter;
import com.raspa.propertymanagementbackend.security.jwt.JwtUnAuthorizedResponseAuthenticationEntryPoint;
import com.raspa.propertymanagementbackend.services.UserSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtUnAuthorizedResponseAuthenticationEntryPoint jwtUnAuthorizedResponseAuthenticationEntryPoint;

    @Autowired
    UserSecurityService userSecurityService;

    @Autowired
    private JwtTokenAuthorizationOncePerRequestFilter jwtAuthenticationTokenFilter;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
        auth
                .userDetailsService(userSecurityService);
//                .passwordEncoder(passwordEncoder());
    }

//    private BCryptPasswordEncoder passwordEncoder() {
//        return SecurityUtility.passwordEncoder();
//    }

    @Bean
    public static NoOpPasswordEncoder passwordEncoder() {
        return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
    }

    @Bean
    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .csrf().disable()
                .exceptionHandling().authenticationEntryPoint(jwtUnAuthorizedResponseAuthenticationEntryPoint).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/categories").permitAll()
                .antMatchers(HttpMethod.GET, "/api/tags/{name}").permitAll()
                .antMatchers(HttpMethod.GET, "/api/categories/{id}").permitAll()
                .antMatchers(HttpMethod.GET, "/api/products").permitAll()
                .antMatchers(HttpMethod.GET, "/api/products/{id}").permitAll()
                .antMatchers(HttpMethod.GET, "/api/artists").permitAll()
                .antMatchers(HttpMethod.GET, "/api/artists/{id}").permitAll()
                .antMatchers(HttpMethod.GET, "/api/songs").permitAll()
                .antMatchers(HttpMethod.GET, "/api/songs/{id}").permitAll()
                .antMatchers(HttpMethod.POST, "/api/register").permitAll()
                .antMatchers(HttpMethod.GET, "/api/users/register/validUsername/{username}").permitAll()
                .antMatchers(HttpMethod.GET, "/api/users/register/validEmail/{email}").permitAll()
                .antMatchers(HttpMethod.GET, "/api/manufacturers").permitAll()
                .antMatchers("/api/token").permitAll()
                .antMatchers("/api/users/reset-password/init").permitAll()
                .antMatchers("/api/users/reset-password/finish").permitAll()


                //DANGEROUS PUBLIC APIS
//                .antMatchers("/api/artists").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/artists").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/artists/{id}").permitAll()
//                .antMatchers("/api/manufacturers").permitAll()
//                .antMatchers("/api/songs").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/songs").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/songs/{id}").permitAll()
//                .antMatchers( "/api/categories").permitAll()
//                .antMatchers( "/api/tags/{name}").permitAll()
                .anyRequest().authenticated();

        http
                .addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
