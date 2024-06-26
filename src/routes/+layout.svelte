<script>
  import "./styles.css";
  import { page } from "$app/stores";
</script>

<div class="app">
  <aside>
    <div class="aside-title">
      <h1>CTN-Dev.net</h1>
      <p>This is for fun.</p>
    </div>
    <div class="aside-body">
      <ul id="aside-menu">
        <li>
          <a class:active={$page.url.pathname == "/"} href="/">Home</a>
        </li>
        <li>
          <a class:active={$page.url.pathname == "/about"} href="/about"
            >About</a
          >
        </li>
        <li>
          <a class:active={$page.url.pathname == "/project"} href="/project"
            >Project</a
          >
        </li>
      </ul>
    </div>
    <div class="aside-footer"></div>
  </aside>
  <main><slot /></main>
</div>

<style>
</style>
