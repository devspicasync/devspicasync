# How to Configure Nodemailer with Gmail

To use Nodemailer to send emails with your Gmail account, you need to use an "App Password". This is a 16-digit passcode that gives a less secure app or device permission to access your Google Account.

Follow these steps to generate and use an App Password:

## Step 1: Enable 2-Step Verification

You can only use App Passwords if 2-Step Verification is turned on for your Google Account.

1.  Go to your [Google Account](https://myaccount.google.com/).
2.  In the navigation panel, select **Security**.
3.  Under "How you sign in to Google," select **2-Step Verification**.
4.  Click **Get started** and follow the on-screen steps. If you already have 2-Step Verification enabled, you can skip to the next step.

## Step 2: Generate an App Password

1.  Go to the [Security](https://myaccount.google.com/security) page of your Google Account.
2.  Under "How you sign in to Google," select **App passwords**. You may need to sign in again.
3.  If you don’t have the option for App Passwords, it might be because:
    *   2-Step Verification is not set up for your account.
    *   2-Step Verification is only set up for security keys.
    *   Your account is through work, school, or other organization that has restricted access.
4.  At the bottom, choose **Select app** and choose **Other (Custom name)**.
5.  Enter a name for the app (e.g., "Nodemailer") and click **Generate**.
6.  The App Password is the 16-character code in the yellow bar. **Copy this password.** You won't be able to see it again.
7.  Click **Done**.

## Step 3: Configure Your Environment Variables

Now that you have your App Password, you need to add it to your project's environment variables.

1.  Open the `.env.local` file in the root of your project.
2.  Update the following variables:

    ```
    EMAIL_SERVER_USER="your-email@gmail.com"
    EMAIL_SERVER_PASSWORD="your-16-digit-app-password"
    EMAIL_TO="recipient-email@example.com"
    ```

    *   Replace `"your-email@gmail.com"` with your Gmail address.
    *   Replace `"your-16-digit-app-password"` with the 16-digit App Password you generated in the previous step.
    *   Replace `"recipient-email@example.com"` with the email address where you want to receive the messages.

3.  Save the file.

Now, when you run your application, Nodemailer will be able to send emails using your Gmail account.
