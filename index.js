const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generatemarkdown");

function init(){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your project's title?",
                    name: "Title", 
                },
                {
                    type: "input",
                    message: "What is your Github user name?",
                    name: "Github", 
                },
                {
                    type: "input",
                    message: "What is your e-mail address?",
                    name: "Email", 
                    validate: function(email) {
                        let pass = email.match(/\S+@\S+\.\S+/g);
                        if (pass) {
                            return true;
                        }
            
                        return 'Please enter a valid email.';
                    },
                },
                {
                    type: "input",
                    message: "Please offer a description about said project.",
                    name: "Description", 
                },
                {
                    type: "input",
                    message: "Please offer accurate installation instructions of this project.",
                    name: "Installation", 
                },
                {
                    type: "input",
                    message: "Describe the usage of the application here.",
                    name: "Usage", 
                },
                {
                    type:"checkbox",
                    message: "Which license are you publishing this under?(pick one)",
                    choices: ["none", "Apache", "MIT", "GNU", "ISC",],
                    name: "License",
                },
                {
                    type: "input",
                    message: "Include contributions from any partners here.",
                    name: "Contributions", 
                },
                {
                    type: "input",
                    message: "Any test related Information?",
                    name: "Tests", 
                },
]).then((response)=> {
    console.log(response)
    fs.writeFileSync("NewREADME.md", generateMarkdown(response));
})}

init();
