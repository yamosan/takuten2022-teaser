<script lang="ts">
  import "modern-css-reset";
  import logo from "./assets/logo.svg";
  import CountDownTimer from "./lib/CountDownTimer.svelte";

  const DATETIME_OF_EVENT = new Date("2022-08-19T00:00:00+09:00").getTime();
  const TAKUTEN_2021_URL = "https://geikou-takuten.com/2021/";

  const TAKUTEN_2021_URL = "https://www.geikou-takuten.com/2021/";
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

  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
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
