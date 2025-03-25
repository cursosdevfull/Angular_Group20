import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';
import { LayoutService } from '../../../core/services/layout.service';
import { MatButtonModule } from '@angular/material/button';
import { Metadata } from '../../../core/types/metadata.type';

@Component({
  selector: 'cdev-page-course',
  imports: [ContainerComponent, TitleComponent, MatButtonModule],
  templateUrl: './page-course.component.html',
  styleUrl: './page-course.component.scss'
})
export class PageCourseComponent {
  layoutService = inject(LayoutService);

  metadata: Metadata = [
    { field: 'courseId', label: 'ID' },
    { field: 'courseName', label: 'Name' },
    { field: 'courseDescription', label: 'Description' },
    { field: 'courseDuration', label: 'Duration' },
  ]


  data = [
    { courseId: 1, courseName: 'Angular', courseDescription: 'Angular is a platform for building mobile and desktop web applications.', courseDuration: '3 months' },
    { courseId: 2, courseName: 'React', courseDescription: 'React is a JavaScript library for building user interfaces.', courseDuration: '2 months' },
    { courseId: 3, courseName: 'Vue', courseDescription: 'Vue is a progressive framework for building user interfaces.', courseDuration: '1 month' },
    { courseId: 4, courseName: 'Node.js', courseDescription: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.', courseDuration: '4 months' },
    { courseId: 5, courseName: 'Django', courseDescription: 'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.', courseDuration: '3 months' },
    { courseId: 6, courseName: 'Flask', courseDescription: 'Flask is a lightweight WSGI web application framework in Python.', courseDuration: '2 months' },
    { courseId: 7, courseName: 'Ruby on Rails', courseDescription: 'Ruby on Rails is a server-side web application framework written in Ruby.', courseDuration: '3 months' },
    { courseId: 8, courseName: 'Spring', courseDescription: 'Spring is a powerful framework for building Java applications.', courseDuration: '4 months' },
    { courseId: 9, courseName: 'Laravel', courseDescription: 'Laravel is a web application framework with expressive, elegant syntax.', courseDuration: '2 months' },
    { courseId: 10, courseName: 'ASP.NET', courseDescription: 'ASP.NET is an open-source web framework for building modern web apps and services with .NET.', courseDuration: '3 months' },
    { courseId: 11, courseName: 'Flutter', courseDescription: 'Flutter is an open-source UI software development toolkit created by Google.', courseDuration: '2 months' },
    { courseId: 12, courseName: 'Xamarin', courseDescription: 'Xamarin is a Microsoft-owned software company that provides tools for cross-platform mobile app development.', courseDuration: '3 months' },
    { courseId: 13, courseName: 'Swift', courseDescription: 'Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns.', courseDuration: '4 months' },
    { courseId: 14, courseName: 'Kotlin', courseDescription: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.', courseDuration: '2 months' },
    { courseId: 15, courseName: 'Go', courseDescription: 'Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software.', courseDuration: '3 months' },
    { courseId: 16, courseName: 'Rust', courseDescription: 'Rust is a multi-paradigm programming language focused on performance and safety.', courseDuration: '4 months' },
    { courseId: 17, courseName: 'Scala', courseDescription: 'Scala is a strong static type programming language that combines object-oriented and functional programming.', courseDuration: '2 months' },
    { courseId: 18, courseName: 'Haskell', courseDescription: 'Haskell is a standardized, general-purpose purely functional programming language with non-strict semantics and strong static typing.', courseDuration: '3 months' },
    { courseId: 19, courseName: 'Elixir', courseDescription: 'Elixir is a dynamic, functional language designed for building scalable and maintainable applications.', courseDuration: '2 months' },
    { courseId: 20, courseName: 'Clojure', courseDescription: 'Clojure is a dynamic, general-purpose programming language that emphasizes functional programming.', courseDuration: '3 months' },
    { courseId: 21, courseName: 'Perl', courseDescription: 'Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.', courseDuration: '2 months' },
    { courseId: 22, courseName: 'R', courseDescription: 'R is a programming language and free software environment for statistical computing and graphics.', courseDuration: '3 months' },
    { courseId: 23, courseName: 'MATLAB', courseDescription: 'MATLAB is a multi-paradigm programming language and numeric computing environment developed by MathWorks.', courseDuration: '4 months' },
    { courseId: 24, courseName: 'SAS', courseDescription: 'SAS is a software suite developed by SAS Institute for advanced analytics, business intelligence, data management, and predictive analytics.', courseDuration: '2 months' },
    { courseId: 25, courseName: 'Julia', courseDescription: 'Julia is a high-level, high-performance dynamic programming language for technical computing.', courseDuration: '3 months' },
    { courseId: 26, courseName: 'COBOL', courseDescription: 'COBOL is a compiled English-like computer programming language designed for business use.', courseDuration: '4 months' },
    { courseId: 27, courseName: 'Fortran', courseDescription: 'Fortran is a general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing.', courseDuration: '2 months' },
    { courseId: 28, courseName: 'Ada', courseDescription: 'Ada is a structured, statically typed, imperative, and object-oriented high-level computer programming language.', courseDuration: '3 months' },
    { courseId: 29, courseName: 'Lisp', courseDescription: 'Lisp is a family of computer programming languages with a long history and a distinctive, fully parenthesized prefix notation.', courseDuration: '2 months' },
    { courseId: 30, courseName: 'Scheme', courseDescription: 'Scheme is a functional programming language and a dialect of Lisp.', courseDuration: '3 months' },
    { courseId: 31, courseName: 'Prolog', courseDescription: 'Prolog is a logic programming language associated with artificial intelligence and computational linguistics.', courseDuration: '2 months' },
    { courseId: 32, courseName: 'Smalltalk', courseDescription: 'Smalltalk is an object-oriented, dynamically typed reflective programming language.', courseDuration: '3 months' },
    { courseId: 33, courseName: 'F#', courseDescription: 'F# is a functional-first programming language that enables you to write succinct, robust, and performant code.', courseDuration: '4 months' },
    { courseId: 34, courseName: 'C#', courseDescription: 'C# is a modern, object-oriented programming language developed by Microsoft.', courseDuration: '2 months' },
    { courseId: 35, courseName: 'VB.NET', courseDescription: 'VB.NET is an object-oriented programming language implemented on the .NET Framework.', courseDuration: '3 months' },
    { courseId: 36, courseName: 'Dart', courseDescription: 'Dart is a client-optimized programming language for apps on multiple platforms.', courseDuration: '2 months' },
    { courseId: 37, courseName: 'TypeScript', courseDescription: 'TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language.', courseDuration: '3 months' },
    { courseId: 38, courseName: 'CoffeeScript', courseDescription: 'CoffeeScript is a programming language that transcompiles to JavaScript.', courseDuration: '2 months' },
    { courseId: 39, courseName: 'Elm', courseDescription: 'Elm is a functional language for declaratively creating web browser-based graphical user interfaces.', courseDuration: '3 months' },
    { courseId: 40, courseName: 'OCaml', courseDescription: 'OCaml is a general-purpose programming language with an emphasis on expressiveness and safety.', courseDuration: '2 months' },
    { courseId: 41, courseName: 'Crystal', courseDescription: 'Crystal is a programming language with a syntax similar to Ruby.', courseDuration: '3 months' },
    { courseId: 42, courseName: 'Nim', courseDescription: 'Nim is a statically typed compiled systems programming language.', courseDuration: '4 months' },
    { courseId: 43, courseName: 'Solidity', courseDescription: 'Solidity is a high-level programming language for implementing smart contracts.', courseDuration: '2 months' },
    { courseId: 44, courseName: 'VHDL', courseDescription: 'VHDL is a hardware description language used in electronic design automation to describe digital and mixed-signal systems.', courseDuration: '3 months' },
    { courseId: 45, courseName: 'Verilog', courseDescription: 'Verilog is a hardware description language used to model electronic systems.', courseDuration: '2 months' },
    { courseId: 46, courseName: 'ABAP', courseDescription: 'ABAP is a high-level programming language created by the German software company SAP SE.', courseDuration: '3 months' },
    { courseId: 47, courseName: 'PL/SQL', courseDescription: 'PL/SQL is a procedural language extension to SQL.', courseDuration: '2 months' },
    { courseId: 48, courseName: 'T-SQL', courseDescription: 'T-SQL is an extension of SQL that is used in Microsoft SQL Server.', courseDuration: '3 months' },
    { courseId: 49, courseName: 'XQuery', courseDescription: 'XQuery is a functional query and functional programming language that is designed to query XML data.', courseDuration: '2 months' },
    { courseId: 50, courseName: 'AWK', courseDescription: 'AWK is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool.', courseDuration: '3 months' },
  ]

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }

}
