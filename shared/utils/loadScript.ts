type Params = {
  defer?: boolean;
  async?: boolean;
  appendTo?: HTMLElement;
};

export const loadScript = (src: string, params: Params = {}) => {
  const script = document.createElement("script");
  if (params.defer) script.defer = true;
  if (params.async) script.async = true;
  script.src = src;
  const appendTo = params.appendTo ?? document.body;
  appendTo.appendChild(script);
};

export const loadScriptOnce = (src: string, params: Params) => {
  if (document.querySelector(`script[src="${src}"]`)) return;
  loadScript(src, params);
};
