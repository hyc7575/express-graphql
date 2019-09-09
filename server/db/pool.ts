// import mysql from 'mysql2/promise';
// const mysql = require('mysql2/promise');
import mysql, {Pool} from 'mysql2/promise';
import dbConfig from './dbConfig';

const pool: Pool = mysql.createPool(
	Object.assign({ connectionLimit: 10 }, dbConfig)
);

export default pool;