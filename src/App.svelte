<script lang="ts">
  import "modern-css-reset";
  import { onMount } from "svelte";
  import logo from "./assets/logo.svg";
  import instagramIcon from "./assets/instagram.svg";
  import twitterIcon from "./assets/twitter.svg";
  import CountDownTimer from "./lib/CountDownTimer.svelte";

  const DATETIME_OF_EVENT = import.meta.env["VITE_APP_DATETIME_OF_EVENT"];
  const SITE_2021_URL = import.meta.env["VITE_APP_TAKUTEN_2021_SITE_URL"];
  const INSTAGRAM_URL = import.meta.env["VITE_APP_TAKUTEN_2021_INSTAGRAM_URL"];
  const TWITTER_URL = import.meta.env["VITE_APP_TAKUTEN_2021_TWITTER_URL"];

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
  <main class="main">
    <div class="contents">
      <img src={logo} alt="logo" />
      <p>COMING SOON</p>
      <CountDownTimer date={DATETIME_OF_EVENT} />
    </div>
    <ul class="sns">
      <li>
        <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="twitter" />
        </a>
      </li>
      <li>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </li>
    </ul>
  </main>
  <footer class="footer">
    <a href={SITE_2021_URL}>昨年の卓展2021の様子はこちら>></a>
  </footer>
</div>

<style lang="scss">
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

  .main {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -88px;
    @include mq(sm) {
      margin-top: -110px;
    }
  }

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 248px;
      margin-bottom: 32px;
      @include mq(sm) {
        margin-bottom: 42px;
      }
    }

    p {
      color: #df2b27;
      font-weight: 700;
      font-size: min(8.2vw, 71px);
      letter-spacing: 0.3em;
      text-indent: 0.4em;
      line-height: 1;
      margin-bottom: 12px;
      @include mq(sm) {
        margin-bottom: 14px;
      }
    }
  }

  .sns {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: min(4.5vw, 90px);
    top: 50%;
    transform: translateY(-50%);
    @include mq(lg) {
      position: static;
      transform: none;
      margin-top: 36px;
      flex-direction: row;
    }

    li {
      width: 56px;
      height: 56px;
      border-radius: 100vw;
      background-color: #49c0e6;
      color: #ffffff;
      display: grid;
      place-items: center;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
      @include mq(sm) {
        width: 36px;
        height: 36px;
      }
      /* flex gap */
      margin-top: 40px;
      margin-left: 0;
      @include mq(lg) {
        margin-top: 0;
        margin-left: 36px;
      }
      @include mq(sm) {
        margin-top: 0;
        margin-left: 14px;
      }
      &:first-child {
        margin: 0;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 100px;
    a {
      text-decoration: underline;
      color: #df2b27;
      font-weight: 700;
      letter-spacing: 0.25em;
      font-size: 16px;
      @include mq(sm) {
        font-size: 13px;
      }
    }
  }
</style>
