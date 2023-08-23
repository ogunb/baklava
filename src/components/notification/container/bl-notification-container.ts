import { html, LitElement, TemplateResult } from "lit";
import { customElement, query } from "lit/decorators.js";
import BlNotification from "../bl-notification";
import style from "./bl-notification-container.css";

export type NotificationVariant = "info" | "warning" | "success" | "danger";

type Action = {
  label: string;
  onClick: (notification: BlNotification) => void;
};

export type Notification = {
  caption?: string;
  description?: string;
  icon?: boolean | string;
  variant?: NotificationVariant;
  action: Action & { secondary: Action };
};

/**
 * @tag bl-notification-container
 * @summary Baklava Notification component
 */

@customElement("bl-notification-container")
export default class BlNotificationContainer extends LitElement {
  static get styles() {
    return [style];
  }

  @query("#bl-notification-container-wrapper")
  private wrapperEl?: HTMLDivElement;

  notifications: BlNotification[] = [];

  public async addNotification(props: Notification) {
    if (!this.wrapperEl) {
      await this.updateComplete;
    }

    const notification = new BlNotification();

    notification.caption = props.caption;
    notification.description = props.description;
    notification.icon = props.icon;
    notification.variant = props.variant;

    this.wrapperEl!.appendChild(notification);
  }

  connectedCallback(): void {
    super.connectedCallback();

    document.addEventListener("bl-notification-created", async (event: any) => {
      console.log(event);
      const notification = event.detail;

      if (this.notifications.includes(notification)) {
        return;
      }

      if (!this.wrapperEl) {
        await this.updateComplete;
      }

      this.notifications.push(notification);
      this.wrapperEl!.appendChild(notification);
    });

    document.addEventListener("bl-notification-removed", (event: any) => {
      const notification = event.detail;

      this.notifications = this.notifications.filter(item => item !== notification);
    });
  }

  protected createRenderRoot() {
    return this;
  }

  render(): TemplateResult {
    return html`
      <style>
        ${style.cssText}
      </style>
      <div id="bl-notification-container-wrapper"></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bl-notification-container": BlNotificationContainer;
  }
}
