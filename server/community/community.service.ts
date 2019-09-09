import { CommunityDTO } from './community.dto';
import CommunityDao from './community.dao';

class UserService {
	private communityDao: CommunityDao
	constructor() {
		this.communityDao = new CommunityDao();
	}
	public async getCommunityList(): Promise<CommunityDTO[]> {
		const list: CommunityDTO[] = await this.communityDao.getCommunityList();
		// 필요한 작업들 하고
		return list;
	}
	public async getCommunityDetail(id: number): Promise<CommunityDTO> {
		const detail: CommunityDTO = await this.communityDao.getCommunityDetail(id);
		return detail;
	}
};

export default UserService;