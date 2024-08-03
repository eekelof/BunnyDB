import { Glob } from "bun";
import { mkdir, unlink } from "node:fs/promises";

export class BunnyDB {
    static async dir(dir: string) {
        try {
            await mkdir(dir, { recursive: true });
        }
        catch (e) { return false }
        return true;
    }
    static async set(dir: string, id: string, entry: any) {
        try {
            const path = BunnyDB.#GET_PATH(dir, id);
            await Bun.write(path, JSON.stringify(entry));
            return true;
        }
        catch (e) { return false }
    }
    static async remove(dir: string, id: string) {
        const path = BunnyDB.#GET_PATH(dir, id);
        const file = Bun.file(path);
        if (!(await file.exists()))
            return false;
        try {
            const res = await unlink(path);
            if (res === undefined)
                return true;
        }
        catch (e) { return false }
        return false;
    }
    static async exists(dir: string, id: string) {
        try {
            const path = BunnyDB.#GET_PATH(dir, id);
            const file = Bun.file(path);
            return await file.exists();
        }
        catch (e) { return false }
    }

    static async get(dir: string, id: string) {
        const path = BunnyDB.#GET_PATH(dir, id);
        return await BunnyDB.#getFromPath(path);
    }
    static async getAllIDs(dir: string) {
        const res: string[] = [];
        const glob = new Glob("*.json");
        try {
            for await (const id of glob.scan(dir)) {
                res.push(id.slice(0, -5));
            }
        }
        catch (e) { return [] }
        return res;
    }
    static async getAll(dir: string) {
        const res = [];
        const glob = new Glob("*.json");
        try {
            for await (const path of glob.scan(dir)) {
                const entry = await BunnyDB.#getFromPath(dir + "/" + path);
                if (entry)
                    res.push(entry);
            }
        }
        catch (e) { return [] }
        return res;
    }

    static async #getFromPath(path: string) {
        try {
            const file = Bun.file(path);
            if (!(await file.exists()))
                return null;
            return await file.json();
        }
        catch (e) { return null }
    }
    static #GET_PATH(dir: string, id: string) {
        return dir + "/" + id + ".json";
    }
}