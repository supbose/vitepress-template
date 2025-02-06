import { defineConfig } from '@vill-v/bumpp'

export default defineConfig({
  changelog: {
    excludeAuthors: [],
    types: {
      feat: { title: '🚀 特性' },
      perf: { title: '🔥 性能优化' },
      fix: { title: '🩹 修复' },
      refactor: { title: '💅 重构' },
      examples: { title: '🏀 示例' },
      docs: { title: '📖 文档' },
      chore: { title: '🏡 框架' },
      build: { title: '📦 打包' },
      test: { title: '✅ 测试' },
      BreakingChange: { title: '🚨 破坏性改动' },
      style: { title: '🎨 样式' },
    },
  },

})
