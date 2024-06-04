<template>
  <div class="wanghongmei-training-school-main">
    <top-header-comp />
    <RouterView />
  </div>
  <fixedNav />
</template>
<script setup>
import { RouterView } from 'vue-router'

import fixedNav from '@/components/fixedNav';
import topHeaderComp from "@/components/topHeader";
</script>

<style scoped>
.wanghongmei-training-school-main{
  max-width: 1920px;
  margin:0 auto;
  min-height: 100vh;
}
</style>
