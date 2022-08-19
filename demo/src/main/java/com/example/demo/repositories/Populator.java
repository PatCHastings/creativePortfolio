package com.example.demo.repositories;

import com.example.demo.model.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private StudentRepository studentRepo;

    public Populator(StudentRepository studentRepo) {
        this.studentRepo = studentRepo;
    }

    @Override
    public void run(String... args) throws Exception {
    Student student = new Student("Patrick");
    studentRepo.save(student);
    studentRepo.save(new Student("Julie"));
    studentRepo.save(new Student("Zoe"));
    studentRepo.save(new Student("Baz"));
    }


}
