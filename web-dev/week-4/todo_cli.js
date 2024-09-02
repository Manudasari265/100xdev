const fs = require('fs');
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('todo')
  .description('CLI to manage your todo list')
  .version('0.1.0');

// Command to list all tasks
program.command('list')
  .description('Show all tasks')
  .action(() => {
    showTasks();
  });

// Command to add a new task
program.command('add')
  .description('Add a new task')
  .argument('<task>', 'The task to add')
  .action((task) => {
    addTask(task);
  });

function showTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log(chalk.yellow('No tasks to show.'));
  } else {
    console.log(chalk.green('Your tasks:'));
    tasks.forEach((task, index) => {
      const status = task.done ? chalk.green('[✓]') : chalk.red('[ ]');
      console.log(`${index + 1}. ${status} ${task.name}`);
    });
  }
}

function addTask(task) {
  const tasks = loadTasks();
  tasks.push({ name: task, done: false });
  saveTasks(tasks);
  console.log(chalk.green(`Added task: ${task}`));
}

// Helper function to load tasks from tasks.json
function loadTasks() {
  try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper function to save tasks to tasks.json
function saveTasks(tasks) {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

program.parse(process.argv);