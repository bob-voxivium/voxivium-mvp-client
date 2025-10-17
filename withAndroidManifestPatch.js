const {
  withAndroidManifest,
  AndroidConfig,
  createRunOncePlugin,
} = require('@expo/config-plugins');

const PACKAGE_NAME = "com.google.mlkit.vision.DEPENDENCIES";
const REQUIRED_VALUE = "barcode_ui,face";
const TOOLS_NAMESPACE = 'http://schemas.android.com/tools';

/**
 * Custom config plugin to modify the Android Manifest and resolve the ML Kit conflict.
 * It ensures the correct dependencies are listed and forces manifest merger to use this value.
 */
const withAndroidManifestPatch = (config) => {
  return withAndroidManifest(config, (manifestConfig) => {

    const manifest = manifestConfig.modResults.manifest;

    // STEP: 1. Ensure the 'tools' namespace is present on the root <manifest> tag
    if (!manifest.$) {
        manifest.$ = {};
    }
    if (!manifest.$['xmlns:tools']) {
      manifest.$['xmlns:tools'] = TOOLS_NAMESPACE;
      console.log('[Config Plugin] Added xmlns:tools to root manifest.');
    }

    // 2. Get a reference to the main <application> tag
    const application = AndroidConfig.Manifest.getMainApplicationOrThrow(
      manifestConfig.modResults
    );

    // 3. Add the ML Kit meta-data tag to the <application> element
    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      application,
      PACKAGE_NAME,
      REQUIRED_VALUE
    );

    // 4. Find the newly added meta-data item to apply the tools:replace attribute
    const metaDataArray = application['meta-data'] || [];
    
    const mlKitMetaData = metaDataArray.find(
      (item) => item.$['android:name'] === PACKAGE_NAME
    );

    // 5. Inject the tools:replace="android:value" attribute to force override
    if (mlKitMetaData) {
      // Must add the tools namespace if it doesn't exist (addMetaDataItemToMainApplication handles this)
      // The "$" object holds the XML attributes for the tag.
      mlKitMetaData.$['tools:replace'] = 'android:value'; 
      console.log(`[Config Plugin] Successfully patched AndroidManifest.xml: Added tools:replace for ${PACKAGE_NAME}`);
    } else {
      console.warn(`[Config Plugin] Failed to find meta-data item for ${PACKAGE_NAME}. Patching failed.`);
    }

    return manifestConfig;
  });
};

// Use createRunOncePlugin for safety and version tracking
module.exports = createRunOncePlugin(withAndroidManifestPatch, 'withAndroidManifestPatch', '1.0.0');