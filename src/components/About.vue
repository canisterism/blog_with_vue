<template>
  <el-main id="about">
    <el-row>
      <el-col :span="12" :offset="6">
        <h2>ABOUT ME</h2>
        <p>
          東京で働くWebエンジニアです。<br>最近はVue.jsをさわさわしています。
        </p>
        <h2>SKILL</h2>
        <p>Ruby</p>
        <p>JavaScript(Vue.js)</p>
        <p>AWS</p>
        <h2>CONTACT</h2>
        <el-button>
          <router-link to="https://twitter.com/canisterism">
            Twitter
          </router-link>
        </el-button>
        <el-button>
          <router-link to="/https://github.com/canisterism">
            Github
          </router-link>
        </el-button>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style>
</style>
