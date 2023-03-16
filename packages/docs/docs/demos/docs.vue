<!--
 * @ Author: supbose
 * @ Create Time: 2023-02-23 12:07:26
 * @ Modified by: supbose
 * @ Modified time: 2023-03-08 20:18:34
 * @ Description: qingshu.work
 -->

<docs>
---
title: Test Title
---

Hello World This is Test Docs block code in `docs.vue`.

</docs>

<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('Hello World')
</script>
