// Mock implementation - simulates email sending
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "noreply@jhco.org.jo";

// Mock email log for development
const emailLog: Array<{ to: string | string[]; subject: string; timestamp: string }> = [];

export async function sendVolunteerConfirmation(
  email: string,
  program: string,
  details: { name: string; date: string; location: string }
): Promise<boolean> {
  try {
    // Mock email sending
    emailLog.push({
      to: email,
      subject: `Welcome to JHCO - ${program} Program`,
      timestamp: new Date().toISOString(),
    });

    console.log(`[Mock Email] Volunteer confirmation sent to ${email}`);
    return true;
  } catch (error) {
    console.error("Mock email error:", error);
    return false;
  }
}

export async function sendDonorAlert(
  email: string,
  amount: number,
  program: string,
  impact: string
): Promise<boolean> {
  try {
    // Mock email sending
    emailLog.push({
      to: email,
      subject: `Your Donation Impact - ${program} Program`,
      timestamp: new Date().toISOString(),
    });

    console.log(`[Mock Email] Donor alert sent to ${email} for ${program} donation`);
    return true;
  } catch (error) {
    console.error("Mock email error:", error);
    return false;
  }
}

export async function sendNewsletter(
  emails: string[],
  subject: string,
  html: string
): Promise<number> {
  try {
    // Mock newsletter sending
    emailLog.push({
      to: emails,
      subject,
      timestamp: new Date().toISOString(),
    });

    console.log(`[Mock Email] Newsletter sent to ${emails.length} subscribers`);
    return emails.length;
  } catch (error) {
    console.error("Mock email error:", error);
    return 0;
  }
}
