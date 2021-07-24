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

### signup

### signin

### postAnxiety / getAnxiety

### (Edit, Delete)

### getObjectAndHabits

### postObject

### (Edit, Delete)

### postHabit

### (Edit, Delete)

### getCalendar

### postCalendar

### swagger
