import { rafListen } from "./rafListen";

const onResize = rafListen.bind(null, window, "resize");

export { onResize };
