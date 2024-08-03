# BunnyDB
JSON database for Bun

[![npm](https://img.shields.io/npm/v/bunnydb)](https://www.npmjs.com/package/bunnydb)
[![npm](https://img.shields.io/npm/dm/bunnydb)](https://www.npmjs.com/package/bunnydb)
[![GitHub](https://img.shields.io/github/license/jgtools/bunnydb)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Features
- :rabbit: Works with Bun
- :zap: Zero dependencies
- :gear: Creates JSON files in regular folders

## Installation

```bash
bun i bunnydb
```

## Usage

```typescript
import { BunnyDB } from "bunnydb"

BunnyDB.dir("users")

BunnyDB.set("users", "id", {id: "id", name: "Bob"})
BunnyDB.remove("users", "id")
BunnyDB.exists("users", "id")

BunnyDB.get("users", "id")
BunnyDB.getAllIDs("users")
BunnyDB.getAll("users")
```

## Notes

### Use / when creating nested dirs
```typescript
BunnyDB.dir("db")
BunnyDB.dir("db/users")
BunnyDB.dir("db/nested/dir")
```

## License

MIT
