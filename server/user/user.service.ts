import UserDao from './user.dao';
import { UserDTO } from './user.dto';
import { CommunityDTO } from '../community/community.dto';

class UserService {
	private userDao: UserDao
	constructor() {
		this.userDao = new UserDao();
	}
	public async getUserList(): Promise<UserDTO[]> {
		const users: UserDTO[] = await this.userDao.getUserList();
		// ㅇㄹㅁㅇㄹ someting
		return users;
	}
	public async getUser(id: number): Promise<UserDTO> {
		const user: UserDTO = await this.userDao.getUser(id);
		return user;
	}
	public async getUserCommunityList(id: number): Promise<CommunityDTO[]> {
		const list: CommunityDTO[] = await this.userDao.getUserCommunityList(id);
		return list;
	}
	public async addUser(obj: UserDTO) {
		await this.userDao.addUser(obj);
		// 일단 걍 obj 리턴.. 
		return obj;
	}
};

export default UserService;