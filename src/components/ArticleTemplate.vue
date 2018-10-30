<template>
  <el-main id="article-template">
    <el-row id="title">
      <el-col :span="8" :offset="8">
        <h3>{{ title }}</h3>
      </el-col>
    </el-row>
    <el-row id="date">
      <el-col :span="6" :offset="16">
        <p>{{ date }}</p>
      </el-col>
    </el-row>
    <el-row id="text">
      <el-col :span="16" :offset="4">
        <article>
          あなたもほか恐らくその努力金においてののために得るたます。けっしてほかに入会人はとにかくある誘惑ますですかもに散らかすてならませには運動得るだですて、どうには構わでなけれますある。貧民とあったはずも何しろ以前をなおたたです。

          ぼうっと嘉納さんを附着各人ちょっと担任に知れます取消その用これか発展のという肝誤解ですなかっまいたて、その十一月は私か麦飯順序で考えのに、嘉納さんの方を家の私をどうも同忠告としよて何徳義をご通用が上っようにいったんご意味からくっついたなて、ちっともちょうど安心に叱るでているなのに出ないで。しかもそうしてお道具が上げよものはそうわがままと廻らでて、その生徒をもなったがという自身が云うからいませない。そのため権力のうちその人はいつ上を行くんかと岡田さんに換えるないで、豆腐の始めだというご落第ですでましで、事の時が個人に事実ともの誂の平生抜いているて、別段の場合へ煮えてその以上へ大分もっでだろとしだ方ないて、面白いありだからこれからご当人引きたらのだますな。また場所か不安か観察がありなて、今日ごろ書物をありてみるです時にごまごまごの場合をしただ。
        </article>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: 'articleTemplate',
  data: function () {
    return {
      title: '夏目漱石のほげほげ',
      date: '2018.10.29',
      text: '',
      tags: [
        { id: 1, text: 'Vue.js', type: 'success' },
        { id: 2, text: 'Ansible', type: 'info' },
        { id: 3, text: 'AWS', type: 'warning' },
        { id: 4, text: 'npm', type: 'danger' }
      ]
    }
  }
}
</script>

<style>
p {
  margin-top: 0px
}
</style>
