import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
//for demostration databases are not use it
//thats why an array is created
const reminders: Reminder[] = [];

router.get('/', (req, res) => {
    res.json(reminders);
});

router.post('/', (req, res) => {
    const { title } = req.body as CreateReminderDto;
    //Every reminder should have 3 properties
    //id, title and isComplete
    const reminder = new Reminder(title);
    reminders.push(reminder);
    //by convention in REST status should be 201
    res.status(201).json(reminder);
});

export default router;