import Redis from 'ioredis'
import { schedule } from 'node-cron'
import { REDIS_URL } from '~env'

export const redis = new Redis(REDIS_URL)

redis.on('error', () => {
  console.log('Failed to connect to Redis')
  process.exit(1)
})

redis.on('ready', () => {
  schedule('0 */12 * * *', async () => redis.bgrewriteaof())
})
