import { existsSync } from 'fs';
import mysql from "mysql2/promise";

// import {  } from "../../data";
import { readFile, writeFile,  } from 'fs/promises';


export async function reed_file() {
  try {
    const res = await readFile('./src/data/buget', 'utf8');
    const data = await JSON.parse(res);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function write_file(data, ) {
  await writeFile('./src/data/buget', JSON.stringify(data), 'utf8');
  return true;
}

export async function creatFiles() {
  const res = await writeFile('./src/data/buget', JSON.stringify({currentBudget:0}), 'utf-8');
  return res;
}

export async function creatDB() {
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "rootpass123",
  // database: "schoolSystem",
})
await pool.execute('create DATABASE if not EXISTS IDF_Procurement_API')
}

// function createfile() {

// }
// function read(params:type) {

// }
// function write(params:type) {

// }
