import { Router, Request, Response } from 'express';
import { Task } from '../types/task';

const router = Router();
let tasks: Task[] = [];

router.post('/', (req: Request, res: Response) => {
    const task: Task = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    }

    tasks.push(task);
    res.status(201).json({
        message: "Task has been successfully added",
    })
});

router.get('/', (req: Request, res: Response) => {
    res.json(tasks);
});

router.get('/:id', (req: Request, res: Response) => {
    const task = tasks.find(
        (t) => t.id === parseInt(req.params.id)
    );

    if(!task) {
        res.status(404).json({
            error: 'Task not found',
        })
    } else {
        res.json({
            task,
        })
    }
})

router.put('/:id', (req: Request, res: Response) => {
    const task = tasks.find(
        (t) => t.id === parseInt(req.params.id)
    );

    if(!task) {
        res.status(403).json({
            error: 'Can not update the task',
        })
    } else {
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.completed = task.completed || req.body.completed;

        res.status(201).json({
            task: task,
        })
    }
})

export default router;