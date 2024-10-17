### Twilio

Twilio Interface for Sending SMS Messages

```ts
import { Twilio } from 'https://deno.land/x/twiliosmsservice@1.0.0/index.ts';

const twilio = new Twilio(
  'accountSID',
  'authToken',
  'phoneNumber',
);

twilio.sendMessage('+1234567890', 'Text Message');
```
