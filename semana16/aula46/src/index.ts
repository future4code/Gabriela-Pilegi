import app from './app'
import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import getAllActors from './endpoints/getAllActors'
import getActorById from './endpoints/getActorById';


app.get("/actor", getAllActors);
app.get("/actor", getActorById);
