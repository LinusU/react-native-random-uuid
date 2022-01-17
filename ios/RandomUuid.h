#import <React/RCTBridgeModule.h>

@interface RandomUuid : NSObject <RCTBridgeModule>
-(NSString*)getRandomUuid;
@end
