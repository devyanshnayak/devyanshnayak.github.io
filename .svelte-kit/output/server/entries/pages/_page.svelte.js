import "clsx";
import { f as fallback, b as bind_props } from "../../chunks/index.js";
import { DotLottie } from "@lottiefiles/dotlottie-web";
function Dotlottie($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    function setWasmUrl(url) {
      DotLottie.setWasmUrl(url);
    }
    let autoplay = fallback($$props["autoplay"], false);
    let backgroundColor = fallback($$props["backgroundColor"], void 0);
    let data = fallback($$props["data"], void 0);
    let loop = fallback($$props["loop"], false);
    let mode = fallback($$props["mode"], "forward");
    let renderConfig = fallback($$props["renderConfig"], void 0);
    let segment = fallback($$props["segment"], void 0);
    let speed = fallback($$props["speed"], 1);
    let src = fallback($$props["src"], void 0);
    let useFrameInterpolation = fallback($$props["useFrameInterpolation"], true);
    let marker = fallback($$props["marker"], void 0);
    let layout = fallback($$props["layout"], void 0);
    let animationId = fallback($$props["animationId"], "");
    let themeId = fallback($$props["themeId"], "");
    let stateMachineId = fallback($$props["stateMachineId"], void 0);
    let stateMachineConfig = fallback($$props["stateMachineConfig"], void 0);
    let playOnHover = fallback($$props["playOnHover"], false);
    let themeData = fallback($$props["themeData"], "");
    let dotLottieRefCallback = fallback($$props["dotLottieRefCallback"], () => {
    });
    $$renderer2.push(`<div class="svelte-1ovbizw"><canvas class="svelte-1ovbizw"></canvas></div>`);
    bind_props($$props, {
      autoplay,
      backgroundColor,
      data,
      loop,
      mode,
      renderConfig,
      segment,
      speed,
      src,
      useFrameInterpolation,
      marker,
      layout,
      animationId,
      themeId,
      stateMachineId,
      stateMachineConfig,
      playOnHover,
      themeData,
      dotLottieRefCallback,
      setWasmUrl
    });
  });
}
function _page($$renderer) {
  Dotlottie($$renderer, { src: "lottie.json", loop: false, autoplay: true });
}
export {
  _page as default
};
