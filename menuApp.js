/*Create a menu app as seen in this week’s video.
What you create is up to you as long as it meets the following requirements:

    Use at least one array.
    Use at least two classes.
    Your menu should have the options to create, view, and delete elements. */


//Golf Course Menu App -- Create, view, and delete course data (maybe even edit?????)
//Needs To Track -- Hole Number / Distance to Hole / Par Number / Personal Hole Record

class Hole { //Creates a new class "Hole"
    constructor(holeNum, distance, strokes) { //Constructor for hole class
        this.holeNum = holeNum;
        this.distance = distance;
        this.strokes = strokes;
    }

    thisHole() {
        return `Hole ${holeNum} is a ${this.distance} yard, par ${this.strokes} hole.`;
    } // returns info about the hole
}

class Course { //Creates a new class "Course"
    constructor(name) { //Constructor for Course Class
        this.name = name;
        this.holes = []; //Creates a new holes array for the course object created by the course class
    }

    addHole(hole) {
        if (hole instanceof Hole) {
            this.holes.push(hole);
        }   else {
            throw new Error(`You may only add an instance of hole. Argument: "${hole}" is not a hole`);
        } //Checks if a "hole" is added (not called), throws error if not a "hole"
    }

    thisCourse() {
        return `${this.name} has ${this.holes.length} holes.`;
    } // returns info about the course
}

class Menu {
    constructor() {
        this.courses = []; //Creates a new courses array for the main menu to use to keep a list of courses
        this.selectedCourse = null; //Declares an empty selectedCourse variable for the menu (used to track which course selected from courses array)
    }

    start() {
        let selection = this.showMenuOptions(); //selection is whatever is returned from the showMenuOptions prompt
        while (selection != 0) {
            switch (selection) { //switch case used to check menu functions
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

    showMenuOptions() { //Prompts user to input a number for one of these outcomes
        return prompt(`Please enter one of the following numbers to continue:
        0) Exits the program
        1) Create a new course
        2) Views details of a selected course
        3) Deletes a selected course
        4) Displays a list of courses already created
        `);
    }

    showHoleMenuOptions(courseInfo) { //Prompts user for input number (further into the menus)
        return prompt(`Please enter one of the following numbers to continue:
        0) Return to Main Menu
        1) Create a new hole
        2) Delete an existing hole
        ---------------------------
        ${courseInfo}
        `);
    }


    createCourse() { //Prompts and pushes a new course object into the courses array
        let name = prompt('Enter new course name:');
        this.courses.push(new Course(name));
    }

    viewCourse() { //Prompts for the index of a course, displays the info about that course and its holes
        let index = prompt('Enter the index of the course you wish to view:');
        if (index >= 0 && index < this.courses.length) { //Validating user's input
            this.selectedCourse = this.courses[index];
            let courseData = 'Course Name: ' + this.selectedCourse.name + '\n';

            for (let i = 0; i < this.selectedCourse.holes.length; i++) { //Input validation
                courseData += i + ') Hole ' + this.selectedCourse.holes[i].holeNum + ' - ' 
                    + this.selectedCourse.holes[i].distance + ' Yards - ' 
                    + 'Par ' + this.selectedCourse.holes[i].strokes + '\n';
            }

            let selection = this.showHoleMenuOptions(courseData);
            switch (selection) { //Switch case to use the input given in showHoleMenuOptions
                case '1':
                    this.createHole();
                    break;
                case '2':
                    this.deleteHole();
            }
        }
    }

    deleteCourse() { //Allows for the deletion of a course (user specifies index)
        let index = prompt(`Enter the index of the course you wish to delete:`);
        if (index >= 0 && index < this.courses.length) { //Input verification
            this.courses.splice(index, 1); //Deletes the value at index (, 1 means only that value is deleted)
        }
    }

    displayCourses() { //Displays the courses which have already been created
        let courseString = '';
        for (let i = 0; i < this.courses.length; i++) {
            courseString += i + ') ' + this.courses[i].name + '\n';
        }
        alert(courseString);
    }
    createHole() { //Prompts to create a hole, asks for the information for the hole, then pushes a new object using that info to the holes array for that course
        let holeNum = prompt(`Enter the hole number (1 - 18):`);
        let distance = prompt(`Enter the distance from the tee to the hole (in yards):`);
        let strokes = prompt(`Enter the number of strokes required to reach par on this hole:`);
        this.selectedCourse.holes.push(new Hole(holeNum, distance, strokes));
    }

    deleteHole() { //Allows for the deletion of the hole at index specified by user
        let index = prompt('Enter the index of the hole you wish to delete');
        if (index >= 0 && index < this.selectedCourse.holes.length) { //Input validation
            this.selectedCourse.holes.splice(index, 1); //Deletes the value at index (, 1 means only that value is deleted)
        }
    }   
    
}

let menu = new Menu; //Creates a new menu object which is runnable (not runnable as a class)
menu.start(); //Runs the start() method from the menu object created above