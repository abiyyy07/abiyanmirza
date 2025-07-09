'use client'

import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <title>
            Zamove - Privacy Policy
        </title>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm mb-6">Last updated: July 4, 2025</p>

      <section className="space-y-4">
        <p>
          This privacy policy applies to the mobile application <strong>Zamove</strong> developed by <strong>Afareza Studio</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-6">Information Collection</h2>
        <p>
          We do not collect or store any personally identifiable information from our users.
        </p>

        <h2 className="text-xl font-semibold mt-6">Permissions</h2>
        <p>
          This app may request access to features such as internet, storage, or others. These permissions are solely used to support app functionality and are not used to collect user data.
        </p>

        <h2 className="text-xl font-semibold mt-6">Third-Party Services</h2>
        <p>
            The app may use third-party services that may collect information used to identify you. These services include:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
            <li>
                <Link href={'https://www.google.com/policies/privacy/'} target="_blank" className="text-blue-600 font-bold">Google Play Services</Link>
            </li>
            <li>
                <Link href={'https://support.google.com/admob/answer/6128543?hl=en'} target="_blank" className="text-blue-500 font-bold">Google AdMob</Link> – for displaying ads. AdMob may use cookies and advertising identifiers to personalize ads.
            </li>
        </ul>
        <p className="mt-2">
            Please refer to the respective privacy policies of these services for more detailed information about their data collection practices.
        </p>


        <h2 className="text-xl font-semibold mt-6">Changes</h2>
        <p>
          We may update our Privacy Policy from time to time. We advise you to review this page periodically for any changes.
        </p>

        <h2 className="text-xl font-semibold mt-6">Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact us at: <strong>[abiyy0206@gmail.com]</strong>
        </p>
      </section>
    </main>
  )
}
