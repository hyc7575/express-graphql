import { RowDataPacket } from 'mysql2';
export interface CommunityDTO extends RowDataPacket {
	id: number;
	userId: number;
	content: string;
}
