import express from "express"; 
import CommunityService from './community.service';
import { CommunityDTO } from './community.dto';

class CommunityController {
	private communityService: CommunityService
	public router: express.Router;
	constructor() {
		this.communityService = new CommunityService();
		this.router = express.Router();
		
		this.router.get('/api/community', async (_, res: express.Response) => {
			const list: CommunityDTO[] = await this.communityService.getCommunityList();
			res.send(list);
		});
		this.router.get('/api/community/:id', async (req: express.Request, res: express.Response) => {
			const detail: CommunityDTO = await this.communityService.getCommunityDetail(+req.params.id);
			res.send(detail);
		});
	}	
}

export default CommunityController;