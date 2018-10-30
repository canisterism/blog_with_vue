<template>
  <el-main id="index">
    <el-row class="header_cards" :gutter="20">
      <el-col :span="5" :offset="5">
        <router-link to="/about" id="aboutme_button">
          <el-button type="success" >
            ABOUT ME
          </el-button>
        </router-link>
      </el-col>
      <el-col :span="5" :offset="5">
        <router-link to="/contact" id="contact_button">
          <el-button type="success">
            CONTACT
          </el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-input :span="10" :offset="8" type="text" class="search_text" title="けんさく"></el-input>

    <el-row :gutter="20">
      <el-col class="article-card" v-for="article in articles" :span="14" :offset="5" :key="article.id" align-center>
        <router-link to="/article/1">
          <h3>TITLE: {{article.title}}</h3>
          <p>TEXT: {{article.text}}</p>
        </router-link>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      articles: [
        { id: 1, title: 'hogetitle', text: 'hogetext' },
        { id: 2, title: 'fugatitle', text: 'fugatext' },
        { id: 3, title: 'bartitle', text: 'bartext' },
        { id: 4, title: 'footitle', text: 'footext' }
      ]
    }
  }
}
</script>

<style>
a, a:link, a:visited {
  text-decoration: none;
}

#aboutme_button, #contact_button {
  color: #ffffff;
}

.search_text {
  margin-top: 20px;
  width: 300px;
  font-size: 1rem;
}

.el-col {
  margin-top: 20px;
}

.article-card {
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  transition: .1s;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
}

.article-card:hover {
  border-color: #c6e2ff;
  background-color: #ecf5ff
}

.article-card h3, p {
  color: #606266;
}
</style>
