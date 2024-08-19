import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoOpenPackageViewProps } from './ExpoOpenPackage.types';

const NativeView: React.ComponentType<ExpoOpenPackageViewProps> =
  requireNativeViewManager('ExpoOpenPackage');

export default function ExpoOpenPackageView(props: ExpoOpenPackageViewProps) {
  return <NativeView {...props} />;
}
