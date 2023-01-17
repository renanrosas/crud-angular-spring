package com.renan.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renan.crudspring.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{
    
}
