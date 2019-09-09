# express-graphql
node + express + graphql + vue 연습용 예제

## 작업 환경
Node: v11.2.0 (v7.6 이상 사용하면 문제없을 듯)
npm: v6.11.1

## Project setup
```
# server node_modules 설치
npm install
# client node_modules 설치
cd client
npm install
```

### dbConfig
```
cd server/db
# mac
touch dbConfig.ts
# windows
type nul > dbConfig.ts
```
```javascript
# dbConfig.ts

export default {
	"host": "hostname",
	"port": port, // number
	"user": "root",
	"password": "password",
	"database": "dbname"
}
```

### db table
```mysql
create table user (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  age INT NOT NULL,
  job VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

create table community (
	id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  content VARCHAR(200) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  PRIMARY KEY (id)
);
```

### Server Start
```
# bash1 - root 디렉토리
npm run start
```

### Client Start
```
# bash2 - client 디렉토리
npm run serve
```
