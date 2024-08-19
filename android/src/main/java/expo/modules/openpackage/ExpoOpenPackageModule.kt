package expo.modules.openpackage

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.pm.PackageManager

class ExpoOpenPackageModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoOpenPackage')` in JavaScript.
    Name("ExpoOpenPackage")


    // New openApplication function
    AsyncFunction("openApplication") { packageName: String ->
      val pm: PackageManager = appContext.reactContext?.packageManager
        ?: throw Exception("PackageManager not available")
      
      try {
        val intent = pm.getLaunchIntentForPackage(packageName)
        if (intent != null) {
          appContext.reactContext?.startActivity(intent)
        } else {
          throw Exception("Application not found")
        }
      } catch (e: Exception) {
        throw Exception("Failed to open application: ${e.message}")
      }
    }
  }
}