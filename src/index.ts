import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoOpenPackage.web.ts
// and on native platforms to ExpoOpenPackage.ts
import ExpoOpenPackageModule from './ExpoOpenPackageModule';
import ExpoOpenPackageView from './ExpoOpenPackageView';
import { ChangeEventPayload, ExpoOpenPackageViewProps } from './ExpoOpenPackage.types';

// Get the native constant value.
export const PI = ExpoOpenPackageModule.PI;

export function hello(): string {
  return ExpoOpenPackageModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoOpenPackageModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoOpenPackageModule ?? NativeModulesProxy.ExpoOpenPackage);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoOpenPackageView, ExpoOpenPackageViewProps, ChangeEventPayload };
