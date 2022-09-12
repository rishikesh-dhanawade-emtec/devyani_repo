"use strict";
// Create a class 'Student' with rollno, studentName, course ,dictionary of marks(subjectName ->marks [5]).
//     Provide following functionalities
//     initializer
//     override str method
//     accept student data
//     Print student data for given id.
//     Print Student who has failed in any subject.
//     Write menu driven console program to test above functionalities.( accept records of 5 students
//     and store those in list )
let studentRecord = [];
class Student {
    constructor(rollNo, studentName, course, marks) {
        this.rollNo = 0;
        this.studentName = '';
        this.course = '';
        this.marks = {};
        this.rollNo = rollNo;
        this.studentName = studentName;
        this.course = course;
        this.marks = marks;
    }
    static acceptData(rollNo, studentName, course, marks) {
        let b = new Student(rollNo, studentName, course, marks);
        studentRecord.push(b);
    }
    static printData() {
        const rollNo = prompt("Enter Roll No");
        const index = studentRecord.findIndex((item) => item.rollNo == rollNo);
        console.log(studentRecord[index]);
    }
    static checkMarks() {
        for (const value of studentRecord) {
            // console.log(value.marks)
            for (let key in value.marks) {
                let values = value.marks[key];
                // console.log(values)
                if (values < 35) {
                    console.log(`Roll no. ${value.rollNo} has failed in a subject`);
                    break;
                }
            }
        }
    }
}
const func1 = (rollNo, studentName, course, marks) => {
    Student.acceptData(rollNo, studentName, course, marks);
};
func1(1, 'Student 1', 'MCA', { s1: 60, s2: 70, s3: 65, s4: 82, s5: 72 });
func1(2, 'Student 2', 'BE', { s1: 30, s2: 70, s3: 65, s4: 82, s5: 72 });
func1(3, 'Student 3', 'BTech', { s1: 60, s2: 70, s3: 65, s4: 82, s5: 28 });
func1(4, 'Student 4', 'MCA', { s1: 70, s2: 70, s3: 35, s4: 82, s5: 80 });
func1(5, 'Student 5', 'BE', { s1: 60, s2: 85, s3: 65, s4: 82, s5: 30 });
console.log(studentRecord);
Student.printData();
Student.checkMarks();
