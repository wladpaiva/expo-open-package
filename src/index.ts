// Import the native module. On web, it will be resolved to ExpoOpenPackage.web.ts
// and on native platforms to ExpoOpenPackage.ts
import ExpoOpenPackageModule from "./ExpoOpenPackageModule";

export async function openApplication(packageName: string): Promise<void> {
  await ExpoOpenPackageModule.openApplication(packageName);
}
