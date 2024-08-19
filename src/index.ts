import { UnavailabilityError } from "expo-modules-core";

// Import the native module. On web, it will be resolved to ExpoOpenPackage.web.ts
// and on native platforms to ExpoOpenPackage.ts
import ExpoOpenPackageModule from "./ExpoOpenPackageLauncher";

export async function openApplication(packageName: string): Promise<void> {
  if (!ExpoOpenPackageModule.startActivity) {
    throw new UnavailabilityError("IntentLauncher", "startActivityAsync");
  }

  if (!packageName || typeof packageName !== "string") {
    throw new TypeError(`'packageName' argument must be a non-empty string!`);
  }
  return await ExpoOpenPackageModule.openApplication(packageName);
}
