type AnalyticsValue = string | number | boolean;

export type AnalyticsPayload = Record<string, AnalyticsValue | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: AnalyticsPayload
    ) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const safePayload = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined)
  ) as AnalyticsPayload;

  window.gtag?.("event", eventName, safePayload);
  window.dataLayer?.push({ event: eventName, ...safePayload });

  window.dispatchEvent(
    new CustomEvent("jrag:analytics", {
      detail: { eventName, payload: safePayload },
    })
  );
}
