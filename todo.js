const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileName = 'tasks.json';


let tasks = fs.existsSync(fileName) ? JSON.parse(fs.readFileSync(fileName)) : [];

function saveAndMenu() {
    fs.writeFileSync(fileName, JSON.stringify(tasks));
    menu();
}

function menu() {
    console.log('\n1. Add Task\n2. List Tasks\n3. Exit');
    rl.question('Selection: ', (choice) => {
        if (choice === '1') addTask();
        else if (choice === '2') listTasks();
        else if (choice === '3') rl.close();
        else menu();
    });
}

function addTask() {
    rl.question('Title: ', (title) => {
        rl.question('Description: ', (desc) => {
            tasks.push({ title, desc: desc || 'N/A' });
            saveAndMenu();
        });
    });
}

function listTasks() {
    console.log('\n--- Saved Tasks ---');
    tasks.forEach((t, i) => {
        console.log(`${i + 1}. ${t.title} - ${t.desc}`);
    });
    menu();
}

menu();

