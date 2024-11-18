import { Experiment } from './Experiment';

export abstract class PresentationResult {
  static fromJson(json: any): PresentationResult {
    let experiment: Experiment | undefined;
    if (json.experiment) {
      experiment = Experiment.fromJson(json.experiment);
    }

    switch (json.type) {
      case 'Holdout':
        if (!experiment) throw new Error('Holdout requires an experiment');
        return new PresentationResultHoldout(experiment);
      case 'Paywall':
        if (!experiment) throw new Error('Paywall requires an experiment');
        return new PresentationResultPaywall(experiment);
      case 'NoRuleMatch':
        return new PresentationResultNoRuleMatch();
      case 'EventNotFound':
        return new PresentationResultEventNotFound();
      case 'UserIsSubscribed':
        return new PresentationResultUserIsSubscribed();
      case 'PaywallNotAvailable':
        return new PresentationResultPaywallNotAvailable();
      default:
        throw new Error('Unknown PresentationResult type');
    }
  }
}

// Derived classes
export class PresentationResultEventNotFound extends PresentationResult {}

export class PresentationResultNoRuleMatch extends PresentationResult {}

export class PresentationResultUserIsSubscribed extends PresentationResult {}

export class PresentationResultPaywallNotAvailable extends PresentationResult {}

export class PresentationResultHoldout extends PresentationResult {
  experiment: Experiment;

  constructor(experiment: Experiment) {
    super();
    this.experiment = experiment;
  }
}

export class PresentationResultPaywall extends PresentationResult {
  experiment: Experiment;

  constructor(experiment: Experiment) {
    super();
    this.experiment = experiment;
  }
}
