const inquirer = require('inquirer');
class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'enter text for the logo,text must be only three cracters',
                },
                {
                    type: 'input',
                    name: 'textcolor',
                    message: 'enter text color',

                },
                {
                    type: 'list',
                    name: 'shapetype',
                    message: 'select shape for the logo',
                    choices:["circle","triangle","square"]
                }

            ]).then(({ text,textcolor,shapetype }) => {
               let shape
               switch(shapetype) {
                case "circle":
                  // code block
                  shape=new Cir
                  break;
                case "triangle":
                  // code block
                  break;
                default:
                  // code block
              }
              })
            }}
