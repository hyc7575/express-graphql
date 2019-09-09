import express from "express"; 

// service
import UserService from './user.service';

// dto
import { UserDTO } from './user.dto';
import { CommunityDTO } from '../community/community.dto';

class UserController {
	private userService: UserService
	public router: express.Router;
	constructor() {
		this.router = express.Router();
		
		// service init
		this.userService = new UserService();
		
		this.router.get('/api/users', async (_, res: express.Response) => {
			const users: UserDTO[] = await this.userService.getUserList();
			res.send(users);
		});
		this.router.get('/api/user/:id', async (req: express.Request, res: express.Response) => {
			const user: UserDTO = await this.userService.getUser(+req.params.id);
			res.send(user);
		});
		this.router.get('/api/user/:id/community', async (req: express.Request, res: express.Response) => {
			const list: CommunityDTO[] = await this.userService.getUserCommunityList(+req.params.id);
			res.send(list);
		});
		this.router.post('/api/user', async (req: express.Request, res: express.Response) => {
			const body = req.body;
			const obj: UserDTO = {
				name: body.name,
				age: parseInt(body.age, 10),
				job: body.job
			}
			await this.userService.addUser(obj);
			res.end();
		});
	}	
}

export default UserController;