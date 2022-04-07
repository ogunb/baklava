
import { css } from 'lit';
export default css`
:host {
  display: inline-block;
  position: relative;
  width: auto;
  cursor: pointer;
}

.button {
  display: inline-flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 32px;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  padding: 0;
  cursor: inherit;

  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
}

.button::-moz-focus-inner {
  border: 0;
}

.button:focus {
  outline: none;
}

.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button--disabled * {
  pointer-events: none;
}

.button .button__label {
  padding: 0px 16px;
  line-height: 30px;
}

.button.button--primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #b64040;
}

.button--primary:hover:not(.button--disabled) {
  background-color: #EF6114;
  border-color: #EF6114;
}

.button.button--secondary {
  background-color: #273142;
  border-color: #273142;
  color: #FFFFFF;
}

.button--secondary:hover:not(.button--disabled) {
  background-color: #0F131A;
  border-color: #0F131A;
}`;
