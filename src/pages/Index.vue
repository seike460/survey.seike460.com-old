<template>
  <Layout>
    <h2 class="description">
      登壇をより良くするために忌憚なきフィードバックをください！
    </h2>
    <div class="article">
      <hr>
      <div v-for="item in $page.allSurveyPage.edges">
        <h3><a v-bind:href="item.node.path" v-html="item.node.conference"/></h3>
        <ul>
          <li v-html="item.node.title"/>
        </ul>
      </div>
    </div>
    <hr>
  </Layout>
</template>

<style>
.article {
  margin: 1rem;
}
</style>

<page-query>
query posts {
  allSurveyPage (sortBy: "datetime", order: DESC) {
    edges {
      node {
        title
        path
        conference
        datetime
        place
      }
    }
  }
}
</page-query>
