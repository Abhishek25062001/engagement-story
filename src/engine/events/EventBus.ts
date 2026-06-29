import type {
  ExperienceEventHandler,
  ExperienceEventMap,
  ExperienceEventName,
} from "@/engine/types/events";

export class EventBus {
  private listeners = new Map<
    ExperienceEventName,
    Set<ExperienceEventHandler<ExperienceEventName>>
  >();

  emit<EventName extends ExperienceEventName>(
    eventName: EventName,
    payload: ExperienceEventMap[EventName],
  ) {
    this.listeners.get(eventName)?.forEach((handler) => {
      handler(payload);
    });
  }

  on<EventName extends ExperienceEventName>(
    eventName: EventName,
    handler: ExperienceEventHandler<EventName>,
  ) {
    const handlers = this.listeners.get(eventName) ?? new Set();

    handlers.add(handler as ExperienceEventHandler<ExperienceEventName>);
    this.listeners.set(eventName, handlers);

    return () => {
      handlers.delete(handler as ExperienceEventHandler<ExperienceEventName>);
    };
  }

  clear() {
    this.listeners.clear();
  }
}
