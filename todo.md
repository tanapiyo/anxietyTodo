# API

## ゴール：不安をなげて不安を返す

### install

- class-transformer class-validator
- npm install --save @nestjs/typeorm typeorm sqlite3

### ORM まわり

- relation
  - https://zenn.dev/okakyo/scraps/9503c939f45b40
- 使い方
  - https://qiita.com/elipmoc101/items/9b1e6b3efa62f3c2a166#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E4%BD%9C%E6%88%90db%E6%93%8D%E4%BD%9C%E3%81%BE%E3%81%A7
  - 公式ドキュメント
  - entity 作って、マイグレーションする
- https://qiita.com/potato4d/items/64a1f518abdfe281ce01

### postUser / getUser

- [ ] controller 作る
- [ ] service を作る
- [ ] DB にレコードを登録する
  - [ ] DB 接続情報とる、typeorm の使い方調べながら接続する
  - [ ] テーブルの作成する
    - [ ] entity 作る
    - [ ] build する
    - [ ] typeorm migration:generate -d src/migrations -n create
    - [ ] typeorm migration:run
  - [ ] post の口を作る
- [ ] DB からレコードをとってくる
- [ ] コード整理
  - [ ] DTO 作る

### getObjectAndHabits

### postObject

### (Edit, Delete)

### postHabit

### (Edit, Delete)

### getCalendar

### postCalendar

### swagger

## memo

### 依存関係エラー

- export していないで発生することが多い

## 残タスク

- [ ] user に unique 制約を入れる
- [ ] password を bcrypt
- [ ] テストかく
- [ ] エラーハンドリング
- [ ] ログレベル操作（いるかな）

## test

- localhost:3000/user みたいにテストできる

### ログイン

- signup
  - curl -X POST -H "Content-Type: application/json" -d '{"name":"huga", "password":"pass"}' localhost:3000/user
- signin
  - curl -X POST http://localhost:3000/auth/login -d '{"username": "huga", "password": "pass"}' -H "Content-Type: application/json"

### anxiety

- get
  - Talend API で叩く
  - curl http://localhost:3000/anxiety -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1Z2EiLCJzdWIiOjIsImlhdCI6MTYyNzEzODQ1NSwiZXhwIjoxNjI3MTM5NjU1fQ.omv1MvL1Zda-YZmCqGjgZcgxgdmksgddafa3WAp2drw"
- post
  - curl http://localhost:3000/anxiety -d '{"userId": 1, "content": "testanxiety"}' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1Z2EiLCJzdWIiOjIsImlhdCI6MTYyNzEzODQ1NSwiZXhwIjoxNjI3MTM5NjU1fQ.omv1MvL1Zda-YZmCqGjgZcgxgdmksgddafa3WAp2drw"
- patch
  - curl -X PATCH -H "Content-Type: application/json" -d '{"id":1, "content": "testupdate"}' http://localhost:3000/anxiety
- delete
  - curl -X DELETE -H "Content-Type: application/json" -d '{"id":1}' http://localhost:3000/anxiety

###
