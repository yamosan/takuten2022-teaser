<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";

  // const dispatch = createEventDispatcher<{ tick: number }>(); // TODO: パフォーマンス的に毎秒 dispatch するのがアリか検証
  const dispatch = createEventDispatcher<{ finish: undefined }>();

  export let date: number; // ms

  let now = Date.now();
  let interval: NodeJS.Timer;

  $: count = Math.round(date - now) / 1000;
  $: d = Math.floor(count / 60 / 60 / 24);
  $: h = Math.floor(count / 60 / 60) % 24;
  $: m = Math.floor(count / 60) % 60;
  $: s = Math.floor(count) % 60;

  onMount(() => {
    interval = setInterval(() => {
      now = Date.now();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const pad2 = (n: number) => {
    return String(n).padStart(2, "0");
  };

  $: if (count < 0) {
    clearInterval(interval);
    dispatch("finish");
    d = 0;
    h = 0;
    m = 0;
    s = 0;
  }
</script>

<div class="root">
  <div class="digit">
    {pad2(d)}
    <span>days</span>
  </div>
  <div class="digit">
    {pad2(h)}
    <span>hours</span>
  </div>
  <div class="digit">
    {pad2(m)}
    <span>mins</span>
  </div>
  <div class="digit">
    {pad2(s)}
    <span>secs</span>
  </div>
</div>

<style lang="scss">
  .root {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    gap: 16px;
    @include mq(sm) {
      gap: 6px;
    }
  }

  .digit {
    display: inline-flex;
    gap: 5px;
    font-size: min(10vw, 98px);
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    color: #49c0e6;
    line-height: 1;
    @include mq(sm) {
      gap: 2px;
    }

    span {
      margin-top: 0.45em;
      font-size: min(4vw, 25px);
      font-weight: 300;
      @include mq(sm) {
        margin-top: 0.25em;
      }
    }
  }
</style>
