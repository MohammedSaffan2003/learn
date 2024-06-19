import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CourseDetailComponent implements OnInit {
  courseId!: number;
  course!: { id: number, title: string, description: string };

  courses = [
    { id: 1, title: 'Introduction to JavaScript', description: 'Learn the basics of JavaScript, the most popular programming language for web development.' },
    { id: 2, title: 'Python for Beginners', description: 'Get started with Python, a versatile language used for web development, data analysis, and more.' },
    { id: 3, title: 'Web Development Bootcamp', description: 'A comprehensive guide to becoming a web developer, covering HTML, CSS, JavaScript, and more.' },
    { id: 4, title: 'Data Science with Python', description: 'Learn how to analyze data and create machine learning models using Python.' },
    { id: 5, title: 'Cloud Computing', description: 'Understand the basics of cloud services and deployment.' },
    { id: 6, title: 'Artificial Intelligence', description: 'Dive into AI concepts and develop intelligent systems.' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.params['id'];
    this.course = this.courses.find(c => c.id === this.courseId)!;
  }
}
