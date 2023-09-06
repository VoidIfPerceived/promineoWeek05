/*Create a menu app as seen in this week’s video.
What you create is up to you as long as it meets the following requirements:

    Use at least one array.
    Use at least two classes.
    Your menu should have the options to create, view, and delete elements. */


//Golf Course Menu App -- Create, view, and delete course data (maybe even edit?????)
//Needs To Track -- Hole Number / Distance to Hole / Par Number / Personal Hole Record

class Hole {
    constructor(holeNum, distance, strokes) {
        this.holeNum = holeNum;
        this.distance = distance;
        this.strokes = strokes;
    }

    thisHole() {
        return `Hole ${holeNum} is a ${this.distance} yard, par ${this.strokes} hole.`;
    }
}

class Course {
    constructor(name) {
        this.name = name;
        this.holes = [];
    }

    addHole(hole) {
        if (hole instanceof Hole) {
            this.holes.push(hole);
        }   else {
            throw new Error(`You may only add an instance of hole. Argument: "${hole}" is not a hole`);
        }
    }

    thisCourse() {
        return `${this.name} has ${this.holes.length} holes.`;
    }
}

class Menu {
    constructor() {
        this.courses = [];
        this.selectedCourse = null;
    }

    start() {
        let selection = this.showMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createCourse();
                    break;
                case '2':
                    this.viewCourse();
                    break;
                case '3':
                    this.deleteCourse();
                    break;
                case '4':
                    this.displayCourses();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenuOptions();
        }
        alert('Goodbye!');
    }

    showMenuOptions() {
        return prompt(`Please enter one of the following numbers to continue:
        0) Exits the program
        1) Create a new course
        2) Views details of a selected course
        3) Deletes a selected course
        4) Displays a list of courses already created
        `);
    }

    showHoleMenuOptions(courseInfo) {
        return prompt(`Please enter one of the following numbers to continue:
        0) Return to Main Menu
        1) Create a new hole
        2) Delete an existing hole
        ---------------------------
        ${courseInfo}
        `);
    }


    createCourse() {
        let name = prompt('Enter new course name:');
        this.courses.push(new Course(name));
    }

    viewCourse() {
        let index = prompt('Enter the index of the course you wish to view:');
        if (index >= 0 && index < this.courses.length) { //Validating user's input
            this.selectedCourse = this.courses[index];
            let courseData = 'Course Name: ' + this.selectedCourse.name + '\n';

            for (let i = 0; i < this.selectedCourse.holes.length; i++) {
                courseData += i + ') Hole ' + this.selectedCourse.holes[i].holeNum + ' - ' 
                    + this.selectedCourse.holes[i].distance + ' Yards - ' 
                    + 'Par ' + this.selectedCourse.holes[i].strokes + '\n';
            }

            let selection = this.showHoleMenuOptions(courseData);
            switch (selection) {
                case '1':
                    this.createHole();
                    break;
                case '2':
                    this.deleteHole();
            }
        }
    }

    deleteCourse() {

    }

    displayCourses() {
        let courseString = '';
        for (let i = 0; i < this.courses.length; i++) {
            courseString += i + ') ' + this.courses[i].name + '\n';
        }
        alert(courseString);
    }
    createHole() {
        let holeNum = prompt(`Enter the hole number (1 - 18):`);
        let distance = prompt(`Enter the distance from the tee to the hole (in yards):`);
        let strokes = prompt(`Enter the number of strokes required to reach par on this hole:`);
        this.selectedCourse.holes.push(new Hole(holeNum, distance, strokes));
    }

    deleteHole() {
        let index = prompt('Enter the index of the hole you wish to delete');
        if (index >= 0 && index < this.selectedCourse.holes.length) {
            this.selectedCourse.holes.splice(index, 1);
        }
    }   
    
}

let menu = new Menu;
menu.start();