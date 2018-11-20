import {Youtrack} from "youtrack-rest-client";

const config = require('./config.json');

const toJson = (obj) => JSON.stringify(obj, null, ' ');

const youtrack = new Youtrack(config);

youtrack.projects.all().then(projects => {
    console.log('projects.all');
    console.log(toJson(projects));
});

youtrack.projects.byId('0-0').then(project => {
    console.log('projects.byId');
    console.log(toJson(project));
});
