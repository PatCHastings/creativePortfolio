package com.example.demo.repositories;

import com.example.demo.model.Student;
import org.springframework.data.repository.CrudRepository;
// This is basically it for repositories. they are never super big
public interface StudentRepository extends CrudRepository<Student, Long> {
}
