// prisma.config.ts
import { defineConfig } from '@prisma/config'
import 'dotenv/config'  // 自动加载 .env

export default defineConfig({
  schema: './prisma/schema.prisma',

  migrations: {
    path: './prisma/migrations',
  },

  // 关键：在这里显式定义 datasource.url（从 .env 读取）
  datasource: {
    url: process.env.DATABASE_URL || '',
  },
})