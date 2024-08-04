# BunnyDB
JSON database for Bun

[![npm](https://img.shields.io/npm/v/bunnydb)](https://www.npmjs.com/package/bunnydb)
[![npm](https://img.shields.io/npm/dm/bunnydb)](https://www.npmjs.com/package/bunnydb)
[![GitHub](https://img.shields.io/github/license/eekelof/bunnydb)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Features
- :rabbit: Works with Bun
- :zap: Zero dependencies
- :gear: JSON files in regular folders

## Installation

```bash
bun i bunnydb
```

## Usage

```typescript
import { BunnyDB } from "bunnydb"

await BunnyDB.dir("users") // true/false

await BunnyDB.set("users", "id", {id: "id", name: "Bob"}) // true/false
await BunnyDB.remove("users", "id") // true/false
await BunnyDB.exists("users", "id") // true/false

await BunnyDB.get("users", "id") // any/null
await BunnyDB.getAllIDs("users") // []
await BunnyDB.getAll("users") // []
```

### Notes

#### Use / when creating nested dirs
```typescript
await BunnyDB.dir("db")
await BunnyDB.dir("db/users")
await BunnyDB.dir("db/nested/dir")
```

## License

MIT
