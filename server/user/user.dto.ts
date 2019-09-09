import { RowDataPacket } from 'mysql2';
export interface UserDTO {
	id?: number;
	name: string;
	age: number;
	job: string;
}
export interface UserRowDTO extends RowDataPacket {
	id?: number;
	name: string;
	age: number;
	job: string;
}
