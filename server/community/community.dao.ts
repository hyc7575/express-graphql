// import mysql, { RowDataPacket } from 'mysql2'
import { CommunityDTO } from './community.dto';
import pool from '../db/pool';

class UserDao {
	public async getCommunityList(): Promise<CommunityDTO[]> {
		const [list] = await pool.query<CommunityDTO[]>('SELECT * FROM COMMUNITY', []);
		return list;
	}
	public async getCommunityDetail(id: number): Promise<CommunityDTO> {
		const [list] = await pool.query<CommunityDTO[]>('SELECT * FROM COMMUNITY WHERE ID=?', [id]);
		return list[0];
	}
}

export default UserDao