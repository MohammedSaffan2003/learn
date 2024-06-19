import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CoursesComponent {
  courses = [
    { id: 1, title: 'Introduction to JavaScript', description: 'Learn the basics of JavaScript, the most popular programming language for web development.' },
    { id: 2, title: 'Python for Beginners', description: 'Get started with Python, a versatile language used for web development, data analysis, and more.' },
    { id: 3, title: 'Web Development Bootcamp', description: 'A comprehensive guide to becoming a web developer, covering HTML, CSS, JavaScript, and more.' },
    { id: 4, title: 'Data Science with Python', description: 'Learn how to analyze data and create machine learning models using Python.' },
    { id: 5, title: 'Cloud Computing', description: 'Understand the basics of cloud services and deployment.' },
    { id: 6, title: 'Artificial Intelligence', description: 'Dive into AI concepts and develop intelligent systems.' }
  ];

  constructor(private router: Router) { }

  viewCourseDetail(courseId: number) {
    this.router.navigate(['/courses', courseId]);
  }
}
