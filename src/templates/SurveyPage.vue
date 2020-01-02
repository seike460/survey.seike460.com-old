<template>
  <Layout>
    <hr>
    <div class="article">
      <h2 v-html="$page.surveyPage.conference"/></h3>
      <ul>
         <li><h3>タイトル</h3></li>
        <ul>
          <li v-html="$page.surveyPage.title"/>
        </ul>
        <li><h3>発表時間</h3></li>
        <ul>
          <li v-html="$page.surveyPage.datetime"/>
        </ul>
        <li><h3>場所</h3></li>
        <ul>
          <li v-html="$page.surveyPage.place"/>
        </ul>
      </ul>
      <h3>プロポーザル</h3>
      <div v-html="$page.surveyPage.content"/></div>
    </div>
  </Layout>
</template>

<style>
.article {
  margin: 1rem;
}
</style>

<page-query>
query posts ($path: String!) {
  surveyPage (path: $path) {
    title
    conference
    datetime
    place
    content
  }
}
</page-query>
