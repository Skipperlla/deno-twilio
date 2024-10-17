export class Twilio {
  protected HOST_NAME: string = 'https://api.twilio.com';
  protected HOST_PATH: string = '/2010-04-01/Accounts';
  protected BASE_URL: string = `${this.HOST_NAME}${this.HOST_PATH}`;

  constructor(
    private readonly accountSID: string,
    private readonly authToken: string,
    private readonly phoneNumber: string,
  ) {}

  sendMessage(to: string, message: string) {
    return this.doRawRequest(to, message);
  }

  async doRawRequest(to: string, message: string) {
    const http = fetch(`${this.BASE_URL}/${this.accountSID}/Messages.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // Düzeltildi
        'Authorization': `Basic ${btoa(`${this.accountSID}:${this.authToken}`)}`,
      },
      body: new URLSearchParams({
        To: to,
        From: this.phoneNumber,
        Body: message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok ${response.status} ${response.statusText}`, // Düzeltildi
          );
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(
          `There has been a problem with your fetch operations: ${error}`,
        );
      });

    return http;
  }
}
