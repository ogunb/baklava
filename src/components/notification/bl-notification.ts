import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./bl-notification.css";

export type NotificationVariant = "info" | "warning" | "success" | "danger";

type Action = {
  label: string;
  onClick: (notification: NotificationProps) => void;
};

export type NotificationProps = {
  caption?: string;
  description?: string;
  icon?: boolean | string;
  variant?: NotificationVariant;
  action: Action & { secondary: Action };
};

/**
 * @tag bl-notification
 * @summary Baklava Notification component
 */

@customElement("bl-notification")
export default class BlNotification extends LitElement {
  static get styles(): CSSResultGroup {
    return [style];
  }

  @property()
  caption?: string;

  @property()
  description?: string;

  @property()
  icon?: boolean | string;

  @property()
  variant?: NotificationVariant;

  connectedCallback(): void {
    super.connectedCallback();

    customElements.whenDefined("bl-notification-container").then(() => {
      const event = new CustomEvent("bl-notification-created", {
        bubbles: true,
        composed: true,
        detail: this,
      });

      document.dispatchEvent(event);
    });
  }

  handleClose(): void {
    const event = new CustomEvent("bl-notification-removed", {
      bubbles: true,
      composed: true,
      detail: this,
    });

    document.dispatchEvent(event);
    this.remove();
  }

  render(): TemplateResult {
    return html`
      <div class="notification">
        <bl-alert
          caption="${this.caption}"
          icon=${this.icon}
          variant=${this.variant}
          closable
          @bl-close="${this.handleClose}"
        >
          ${this.description}
          <bl-button slot="action">Action Link</bl-button>
          <bl-button slot="action-secondary">Action Link</bl-button>
        </bl-alert>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bl-notification": BlNotification;
  }
}
