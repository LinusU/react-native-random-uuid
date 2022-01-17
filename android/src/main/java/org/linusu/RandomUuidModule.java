package org.linusu;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.util.UUID;

@ReactModule(name = RandomUuidModule.NAME)
public class RandomUuidModule extends ReactContextBaseJavaModule {
    public static final String NAME = "RandomUuid";

    public RandomUuidModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    @NonNull
    public String getRandomUuid() {
        return UUID.randomUUID().toString();
    }
}
