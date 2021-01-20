const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");


let questions = []

let employeeList = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function askQuestions() {

    questions = [
        {
            type: "input",
            message: "what is your name?",
            name: "fullname"

        },
        {
            type: "input",
            message: "what is your id?",
            name: "id"

        },
        {
            type: "input",
            message: "what is your email?",
            name: "email"

        },
        {
            type: "list",
            message: "what type of employee do you want to add?",
            name: "type",
            choices: ["manager", "intern", "engineer", "exit"]

        }

    ];

    let manager = {
        type: "input",
        message: "what is your officeNumber?",
        name: "officenumber"
    }

    let engineer = {
        type: "input",
        message: "what is your github?",
        name: "github"
    }

    let intern = {
        type: "input",
        message: "what school do you go to?",
        name: "school"
    }



    inquirer.prompt(questions).then(function (response) {

        if (response.type === "manager") {
            inquirer.prompt(manager).then(function (managerResponse) {
                const newManager = new Manager(response.fullname, response.id, response.email, managerResponse.officenumber)
                employeeList.push(newManager)
                askQuestions()
            })
        }
        else if (response.type === "engineer") {
            inquirer.prompt(engineer).then(function (engineerResponse) {
                const newEngineer = new Engineer(response.fullname, response.id, response.email, engineerResponse.github)
                employeeList.push(newEngineer)
                askQuestions()
            })
        }
        else if (response.type === "intern") {
            inquirer.prompt(intern).then(function (internResponse) {
                const newIntern = new Intern(response.fullname, response.id, response.email, internResponse.school)
                employeeList.push(newIntern)
                askQuestions()
            })
        }
        else {
            var htmlContent = render(employeeList)
            fs.writeFile(outputPath, htmlContent, function (error) {
                if (error) {
                    throw error
                }

                console.log("success")
            })
        }

    })
}





askQuestions()

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
