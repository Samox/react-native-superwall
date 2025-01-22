//
//  SuperwallDelegateBridge.swift
//  Superwall
//
//  Created by Yusuf Tör on 21/02/2024.
//

import SuperwallKit

final class SuperwallDelegateBridge: SuperwallDelegate {
  func entitlementStatusDidChange(
    from oldValue: EntitlementStatus,
    to newValue: EntitlementStatus
  ) {
    let data: [String: Any] = [
      "from": oldValue.toJson(),
      "to": newValue.toJson(),
    ]
    sendEvent(withName: "entitlementStatusDidChange", body: data)
  }

  func handleSuperwallPlacement(withInfo placementInfo: SuperwallPlacementInfo) {
    let data: [String: Any] = ["placementInfo": placementInfo.toJson()]
    sendEvent(withName: "handleSuperwallPlacement", body: data)
  }

  func handleCustomPaywallAction(withName name: String) {
    let data: [String: Any] = ["name": name]
    sendEvent(withName: "handleCustomPaywallAction", body: data)
  }

  func willDismissPaywall(withInfo paywallInfo: PaywallInfo) {
    let data: [String: Any] = ["info": paywallInfo.toJson()]
    sendEvent(withName: "willDismissPaywall", body: data)
  }

  func willPresentPaywall(withInfo paywallInfo: PaywallInfo) {
    let data: [String: Any] = ["info": paywallInfo.toJson()]
    sendEvent(withName: "willPresentPaywall", body: data)
  }

  func didDismissPaywall(withInfo paywallInfo: PaywallInfo) {
    let data: [String: Any] = ["info": paywallInfo.toJson()]
    sendEvent(withName: "didDismissPaywall", body: data)
  }

  func didPresentPaywall(withInfo paywallInfo: PaywallInfo) {
    let data: [String: Any] = ["info": paywallInfo.toJson()]
    sendEvent(withName: "didPresentPaywall", body: data)
  }

  func paywallWillOpenURL(url: URL) {
    let data: [String: Any] = ["url": url.absoluteString]
    sendEvent(withName: "paywallWillOpenURL", body: data)
  }

  func paywallWillOpenDeepLink(url: URL) {
    let data: [String: Any] = ["url": url.absoluteString]
    sendEvent(withName: "paywallWillOpenDeepLink", body: data)
  }

  func handleLog(
    level: String,
    scope: String,
    message: String?,
    info: [String: Any]?,
    error: Error?
  ) {
    let data: [String: Any] = [
      "level": level,
      "scope": scope,
      "message": message,
      "info": info,
      "error": error?.localizedDescription,
    ]
    sendEvent(withName: "handleLog", body: data)
  }

  private func sendEvent(withName name: String, body: [String: Any]) {
    SuperwallReactNative.emitter.sendEvent(withName: name, body: body)
  }
}
