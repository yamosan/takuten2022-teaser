<script lang="ts">
  import "modern-css-reset";
  import { onMount } from "svelte";
  import logo from "./assets/logo.svg";
  import CountDownTimer from "./lib/CountDownTimer.svelte";

  const DATETIME_OF_EVENT = import.meta.env["VITE_APP_DATETIME_OF_EVENT"];
  const TAKUTEN_2021_URL = import.meta.env["VITE_APP_TAKUTEN_2021_URL"];

  onMount(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", setFillHeight);
    setFillHeight();
    return () => {
      window.removeEventListener("resize", setFillHeight);
    };
  });
</script>

<div class="root">
  <main>
    <img src={logo} alt="logo" />
    <p class="comming_soon">COMING SOON</p>
    <CountDownTimer date={DATETIME_OF_EVENT} />
  </main>
  <footer>
    <a href={TAKUTEN_2021_URL}>昨年の卓展2021の様子はこちら>></a>
  </footer>
</div>

<style>
  :root {
    /* font-family: "Noto Sans", sans-serif; */
    font-family: "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  :global(html) {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: fixed;
  }

  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
  }

  main {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: -88px;
  }

  main > img {
    width: 248px;

    margin-bottom: 32px;
  }

  main > p {
    color: #df2b27;
    font-weight: 700;
    font-size: min(8.2vw, 71px);
    letter-spacing: 0.3em;
    text-indent: 0.4em;
    line-height: 1;

    margin-bottom: 12px;
  }

  footer {
    position: absolute;
    bottom: 100px;
  }

  footer > a {
    text-decoration: underline;
    color: #df2b27;
    font-weight: 700;
    letter-spacing: 0.25em;
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    main {
      margin-top: -110px;
    }

    main > img {
      margin-bottom: 42px;
    }

    main > p {
      margin-bottom: 14px;
    }

    footer > a {
      font-size: 13px;
    }
  }
</style>
