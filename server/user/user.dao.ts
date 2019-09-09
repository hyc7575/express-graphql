// import mysql, { RowDataPacket } from 'mysql2'
import pool from '../db/pool';
import { UserDTO, UserRowDTO } from './user.dto';
import { CommunityDTO } from '../community/community.dto';

class UserDao {
	public async getUserList(): Promise<UserDTO[]> {
		const [users] = await pool.query<UserRowDTO[]>('SELECT * FROM USER', []);
		return users;
	}
	public async getUser(id: number): Promise<UserDTO> {
		const [user] = await pool.query<UserRowDTO[]>('SELECT * FROM USER WHERE ID=?', [id]);
		return user[0];
	}
	public async getUserCommunityList(id: number): Promise<CommunityDTO[]> {
		const [list] = await pool.query<CommunityDTO[]>('SELECT * FROM COMMUNITY WHERE USER_ID=?', [id]);
		return list;
	}
	public async addUser(obj: UserDTO) {
		await pool.query('INSERT INTO USER(name, age, job) VALUES (?, ? , ?)', [obj.name, obj.age, obj.job]);
	}
}

export default UserDao