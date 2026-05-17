"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRedis = getRedis;
exports.cacheGet = cacheGet;
exports.cacheSet = cacheSet;
exports.cacheDel = cacheDel;
const redis_1 = require("redis");
let client = null;
async function getRedis() {
    if (client?.isOpen)
        return client;
    const url = process.env.REDIS_URL || 'redis://localhost:6379';
    try {
        client = (0, redis_1.createClient)({ url });
        client.on('error', (err) => console.error('[Redis]', err.message));
        await client.connect();
        return client;
    }
    catch {
        return null;
    }
}
async function cacheGet(key) {
    const redis = await getRedis();
    if (!redis)
        return null;
    const raw = await redis.get(key);
    if (!raw)
        return null;
    try {
        return JSON.parse(raw);
    }
    catch {
        return null;
    }
}
async function cacheSet(key, value, ttlSeconds = 300) {
    const redis = await getRedis();
    if (!redis)
        return;
    await redis.setEx(key, ttlSeconds, JSON.stringify(value));
}
async function cacheDel(pattern) {
    const redis = await getRedis();
    if (!redis)
        return;
    const keys = await redis.keys(pattern);
    if (keys.length > 0)
        await redis.del(keys);
}
