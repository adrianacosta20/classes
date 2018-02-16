// const student = {
//     first: `Jim`,
//     last: `Bob`,
//     age: 16,
//     grade: 85,
//     newAssigment(score) {
//         this.grade = (this.grade + score) / 2
//     },
//     passFail(limit) {
//         return (this.grade < 59) ? false : true
//     }

// }

// function createStudent(first, last, age) {
//     this.first = first
//     this.last = last
//     this.age = age
//     function newAssigment(score) {
//         this.grade = (this.grade + score) / 2
//     },
//     function passFail(limit) {
//         return (this.grade < 59) ? false : true
//     }

// }

// const student1 = new createStudent(`Jim`, `Bob`, 16)
// console.log(student1.first)

///////////////

class Student{
    constructor(first,last,age){
        this.first=first
        this.last=last
        this.age=age
        this.grade=85
    }
    newAssigment(score){
        this.grade=(this.grade+score)/2
    }
    passFail(){
        return (this.grade < 60) ? false : true    
      }
     }
     const student1 = new Student(`Jim`, `Bob`, 16)
     const student2 = new Student(`Sara`, `Jean`, 16)
     student1.newAssignment(95)
     console.log(student1.grade)
     console.log(student1.passFail())
     student2.newAssignment(2)
     console.log(student2.grade)
     console.log(student2.passFail())