package com.example.demo.controllers;

import com.example.demo.repositories.StudentRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class StudentController {

    private StudentRepository studentRepo;

    public StudentController(StudentRepository studentRepo) {
        this.studentRepo = studentRepo;
    }

    @RequestMapping("/")
    public String showAllStudents(Model model) {
        model.addAttribute("students")
    }
}
