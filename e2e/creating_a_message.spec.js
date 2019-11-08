describe('Creating a message', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should add the message to the list', async () => {
    await element(by.id('messageText')).tap();
    await element(by.id('messageText')).typeText('New message');
    await element(by.id('sendButton')).tap();

    await expect(element(by.id('messageText'))).toHaveText('');
    await expect(element(by.label('New message'))).toBeVisible();
  });
});
