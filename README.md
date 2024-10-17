### Twilio

Twilio Interface for Sending SMS Messages

```ts
import { Twilio } from './Twilio';

const twilio = new Twilio(
  'accountSID',
  'authToken',
  'phoneNumber',
);

twilio.sendMessage('+1234567890', 'Text Message');
```
