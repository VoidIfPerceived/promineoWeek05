/*Create a menu app as seen in this week’s video.
What you create is up to you as long as it meets the following requirements:

    Use at least one array.
    Use at least two classes.
    Your menu should have the options to create, view, and delete elements. */


//Golf Course Menu App -- Create, view, and delete course data (maybe even edit?????)
//Needs To Track -- Hole Number / Distance to Hole / Par Number / Personal Hole Record

// class HoleCreator extends HoleView{
//     constructor() {

//     }


// } //Might not actually need this - could include in HoleEditor Class
class Course {
    constructor(course) {
        this.course = course;
        this.holes = [];
        this.selectedHole = null;
    }

    courseHoles() {
        return `${this.course} has ${this.holes.length} holes.`;
    }
}

class Hole {
    constructor(holeNumber, distance, par, personalBest, score) {
        this.holeNumber = holeNumber;
        this.distance = distance;
        this.par = par;
        this.personalBest = personalBest;
        this.score = score;
    }
    bestToScore () {
        let score = (this.personalBest - this.par);
        if (personalBest > 0) {
            if (this.par - score == 1) { //checks if you got a hole in 1
                return 'Hole in One'
            } else {
                switch(score) {
                    case (-3): //If 3 below par
                        return 'an Albatross';
                    case (-2): //If 2 below par
                        return 'an Eagle';
                        break;
                    case (-1): //If 1 below par
                        return 'a Birdie';
                        break;
                    case 0: //If score is par
                        return 'a Par';
                        break;
                    case 1: //If score 1 over par
                        return 'a Bogey';
                        break;
                    case 2: //If score 2 over par
                        return 'a Double Bogey';
                        break;
                    case 3: //If score 3 over par
                        return 'a Triple Bogey';
                        break;
                    case (score > 3): //If score 4 or more over par
                        return 'a Monster Bogey';
                        break;
                    default: //No score inserted, faulty syntax, faulty input, etc.
                        return 'N/A, Personal Best not Valid';
                        break;
            }
            }
        }
    }

    holeData() {
        if (holeNumber = true) { //Checking to see whether the hole exists
            return `Hole Number ${this.holeNumber}: This hole has a distance of ${this.distance} yards, and is a par ${this.par}. Your personal best on hole ${this.holeNumber} is ${bestToScore()}.`;
        }

    }
    
}

class Menu {
    constructor() {
        this.courses = [];
        this.selectedCourse = null;
    }

    start() {
        let selection = this.mainMenuOptions().toLowerCase(); 
            if (selection == 'exit') {
                selection = 0;
            }
            //Sets the selection to the input (lowercased) from the prompt in mainMenuOptions
        while (selection != 0) {
            switch (selection) {
                case 'display':
                    this.displayCourses();
                    break;
                case 'view':
                    this.viewCourse();
                    break;
                case 'create':
                    this.createCourse();
                    break;
                case 'delete':
                    this.deleteCourse()
                    break;
                default:
                    selection = 0;
            }
            selection = this.mainMenuOptions();
        }
        alert('Goodbye!');
    }

    mainMenuOptions() {
        return prompt (`Enter one of the following keywords:
        "display": Displays a list of courses
        "view": Displays a course selection menu, then displays the course
        "create": Creates a new course
        "delete": Deletes an existing course
        "exit": Ends program
        `)
    }

    displayCourses() {
        let coursesString = '';
        for (let i = 0; i < this.courses.length; i++) {
            coursesString +=  this.courses[i].course + '\n';
        }
        alert(coursesString);
    }

    viewCourse() {
        let courseSelect = prompt('Please enter the name of the course you would like to view:');
        let index = this.courses[indexOf(courseSelect)];
        if (index <= 0 && index < this.courses.length) {
            this.selectedCourse = this.courses[index];
            let courseName = 'Course Name:' + this.selectedCourse.course;

            for (let i = 0; i < this.selectedCourse.holes.length; i++) {
                courseData += this.selectedCourse.holes[i].holeNumber + ' - '
            }
        }

    
    }

    createCourse() {
        let course = prompt('Enter Course Name:');
        this.courses.push(new Course(course));
    }

    deleteCourse() {

    }
}
//Main Menu ^^^^^^^^^^^^^^^^^^^^^^


//Hole Menu VVVVVVVVVVVVVVVVVVVVVV Can't do it right now- too much effort
// class HoleMenu extends Hole {
//     constructor() {
//         this.holes = [];
//         this.selectedHole = null;
//     }
    
//     holeMenu() {
//         let selection = this.holeMenuOptions().toLowerCase();
//         if (selection == 'back') {
//             selection = 0;
//         }
//         while (selection != 0) {
//             switch (selection) {
//                 case 'display':
//                     this.displayHoles();
//                     break;
//                 case 'view':
//                     this.viewHole();
//                     break;
//                 case 'create':
//                     this.createHole();
//                     break;
//                 case 'delete':
//                     this.deleteHole()
//                     break;
//                 default:
//                     selection = 0;
//             }
//             selection = this.holeMenuOptions();
//         }
//         return Menu.start();
//     }

//     holeMenuOptions() {
//         prompt (`Enter one of the following keywords:
//         "display": Displays a list of existing holes
//         "view": Displays a hole selection menu, then displays the hole
//         "create": Creates a new hole
//         "delete": Deletes an existing hole
//         "back": Returns to main menu
//         `)
//     }

//     displayHoles() {
//         let holesString = '';
//         for (let i = 0; i < this.holes.length; i++) {
//             holesString +=  this.courses[i].course + '\n';
//         }
//         alert(holesString);
//     }

//     viewHole() {
//         let holeSelect = prompt('Please enter the hole number you would like to view:');
//         let index = this.holes[indexOf(holeSelect)];
//         if (index <= 0 && index < this.holes.length) {
//             this.selectedCourse = this.holes[index];
//             let courseName = 'Hole Number:' + this.selectedCourse.course;
//         }
        
    
//     }

//     createHole() {

//     }

//     deleteHole() {

//     }
// }

// Menu.start();