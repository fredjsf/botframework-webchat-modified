### botframework-webchat-modified

#### Modified version of the official MS Botframework-webchat v0.10.7
* Configurable timeout for typing bubble (will check window.typingBubbleTimeout, default to 2000s)
* imBack card action click will render the button title (not the button value) in the client
* loading element on bot first start
* Disable old card buttons (for postBack or imBack), this is configurable through global variable in Window
  - `window.enableOldButtons` flag to set enable/disable old buttons, default to false
  - `window.lastIndexDisableButtons` flag to configure which new buttons to be enabled, e.g. if set to 2, only the last 2 message bubble buttons will be enabled

#### Original botframework-webchat sdk
https://github.com/Microsoft/botframework-webchat
