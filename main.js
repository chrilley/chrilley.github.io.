'use strict';
import { settings } from './modules/settings.js';
import { projectList } from './modules/project-list.js';

projectList(settings.githubUrl); // Calls the API to fetch my github repos
