<template>
  <div class="layout">
    <header class="header">
      <h1>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </h1>
      <nav class="nav">
        <g-image alt="seike460" src="~/favicon.png" width="135" />
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      <span class="copyright">&copy;</span><a href="https://twitter.com/seike460">@seike460</a>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.layout {
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}
.description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
}
.footer {
  justify-content: space-between;
  margin: 0.5rem;
}
.copyright {
  justify-content: space-between;
  margin: 0.5rem;
}
</style>
