const express = require('express');
const app = express();
const routes = require('./backend/routes');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
