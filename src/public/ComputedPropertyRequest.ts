// TypeScript class for the request to compute a device property
export class ComputedPropertyRequest {
  type: ComputedPropertyRequestType;
  eventName: string;

  constructor(type: ComputedPropertyRequestType, eventName: string) {
    this.type = type;
    this.eventName = eventName;
  }

  // Static method to create an instance from a JSON object
  static fromJson(json: {
    type: string;
    eventName: string;
  }): ComputedPropertyRequest {
    const type = ComputedPropertyRequestType.fromJson(json.type);
    return new ComputedPropertyRequest(type, json.eventName);
  }
}


// TypeScript enum for the types of computed properties
export enum ComputedPropertyRequestType {
  minutesSince = 'minutesSince',
  hoursSince = 'hoursSince',
  daysSince = "daysSince",
  monthsSince = "monthsSince",
  yearsSince = "yearsSince",
}

// Utilizing a namespace to extend the enum with serialization and deserialization functions
export namespace ComputedPropertyRequestType {
  // Converts the enum to a JSON-valid string
  export function toJson(type: ComputedPropertyRequestType): string {
    return type;
  }

  // Parses a JSON string to get the corresponding ComputedPropertyRequestType enum value
  export function fromJson(json: string): ComputedPropertyRequestType {
    const matchingType = Object.values(ComputedPropertyRequestType).find(value => value === json);
    if (!matchingType) {
      throw new Error(`Invalid ComputedPropertyRequestType value: ${json}`);
    }
    return matchingType as ComputedPropertyRequestType;
  }
}
