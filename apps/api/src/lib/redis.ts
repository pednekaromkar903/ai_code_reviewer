import { createClient, RedisClientType } from 'redis';

let client: RedisClientType | null = null;

export async function getRedis(): Promise<RedisClientType | null> {
  if (client?.isOpen) return client;

  const url = process.env.REDIS_URL || 'redis://localhost:6379';
  try {
    client = createClient({ url });
    client.on('error', (err) => console.error('[Redis]', err.message));
    await client.connect();
    return client;
  } catch {
    return null;
  }
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  const redis = await getRedis();
  if (!redis) return null;
  const raw = await redis.get(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function cacheSet(key: string, value: unknown, ttlSeconds = 300): Promise<void> {
  const redis = await getRedis();
  if (!redis) return;
  await redis.setEx(key, ttlSeconds, JSON.stringify(value));
}

export async function cacheDel(pattern: string): Promise<void> {
  const redis = await getRedis();
  if (!redis) return;
  const keys = await redis.keys(pattern);
  if (keys.length > 0) await redis.del(keys);
}
