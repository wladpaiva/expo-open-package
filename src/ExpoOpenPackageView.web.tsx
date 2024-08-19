import * as React from 'react';

import { ExpoOpenPackageViewProps } from './ExpoOpenPackage.types';

export default function ExpoOpenPackageView(props: ExpoOpenPackageViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
