const { default: chalk } = require('chalk');
const { commander } = require('commander');
const program = new Command();

program
  .name('CLI Based Todo')
  .description('CLI to manage your tasks')
  .version('0.12.1');

program.command('list')
  .description('Show all tasks')
  .action( () => {
    showTasks();
  })

program.command('add')
  .description('Add a new task')
  .argument('<task>', 'The task to add')
  .action( (task) => {
    addTask(task);
  })

function showTasks() {
    const tasks = loadTasks();
    if(tasks.length === 0){
        console.log(chalk.red('No tasks to show'));
    } else {
        console.log(chalk.green('Your tasks: '));
        todos.forEach(task, index => {
            const status = task.done ? chalk.green('[✓]') : chalk.red('[]');
            console.log(chalk.bgGreenBright(`${index + 1}. ${task.name}`));
        });
    }
}

function addTask(task) {
    const todos = loadTasks();
    todos.push({ name: task, done: false});
    fs.writeFile('todos.json', JSON.stringify(t))
}

function loadTasks() {
    try {
        const data = fs.readFile('todos.json', 'utf-8');
        return JSON.parse(data);
    } catch(err) {
        return [];
    }
}

program.parse(process.argv);