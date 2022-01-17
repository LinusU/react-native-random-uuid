#import "RandomUuid.h"

@implementation RandomUuid

RCT_EXPORT_MODULE()

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getRandomUuid) {
  return [[[NSUUID UUID] UUIDString] lowercaseString];
}

@end
