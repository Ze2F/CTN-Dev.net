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
          <a
            class:active={$page.url.pathname.startsWith("/about")}
            href="/about">About</a
          >
        </li>
        <li>
          <a
            class:active={$page.url.pathname.startsWith("/project")}
            href="/project">Project</a
          >
        </li>
        <li>
          <a href="/discord.html" target="_blank"
            ><img
              style="height: 1em;"
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/653714c1f22aef3b6921d63d_636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
              alt="Join CTN Discord community."
            /></a
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
