import { createClient } from "redis";

let redis;

if (!global._redisClient) {
  redis = createClient({
    url: "redis://default:mypassword@localhost:6379",
  });

  redis.on("error", (err) => console.error("Redis Error:", err));

  global._redisClient = redis.connect().then(() => redis);
}

export default async function getRedis() {
  return global._redisClient;
}