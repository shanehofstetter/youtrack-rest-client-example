import {Youtrack, ReducedProject, Project, User, ReducedUser} from "youtrack-rest-client";

const config = require('../config.json');

const toJson = (obj: any) => JSON.stringify(obj, null, ' ');

const youtrack = new Youtrack(config);

youtrack.projects.all().then((projects: ReducedProject[]) => {
    console.log('projects.all');
    console.log(toJson(projects));
});

youtrack.projects.byId('0-0').then((project: Project) => {
    console.log('projects.byId');
    console.log(toJson(project));
});

youtrack.users.current().then((user: User) => {
    console.log('users.current');
    console.log(toJson(user));
});

youtrack.users.all().then((users: ReducedUser[]) => {
    console.log('users.all');
    console.log(toJson(users));
});