import Footer from '@/components/Footer/footer'
import Menu from '@/components/Menu/menu'

export default async function PrivacyPolicy() {
  return (
    <div className="w-[100vw] ">
      <div className="w-[100%] h-[300px]">
        <div className="h-[100%] text-[50px] uppercas font-semibold text-primary flex justify-center items-center w-[100%] md:w-[80%] lg:w-[60%] border-b-2 mx-auto">
          Our Privacy Policy
        </div>
      </div>

      <div className="w-[100%] md:w-[65%] mx-auto p-4 text-gray-600 text-[18px] ">
        Effective Date: 7 December 2023
        <p>
          Thank you for choosing IPO Circle. Your privacy is of utmost
          importance to us. This Privacy Policy outlines how we collect, use,
          and safeguard your personal information when you interact with our
          website and services. By using IPO Circle, you agree to the terms
          outlined in this policy.
        </p>
        <h1 className="text-[20px] text-black font-bold mt-[40px]">
          Information We Collect
        </h1>
        <p>
          <label className="font-bold text-black">⁠Personal Information:</label>{' '}
          We may collect personal information such as your name, email address,
          contact details, and financial information when you register on our
          platform or engage with our services.
        </p>
        <br />
        <p>
          <label className="font-bold text-black">⁠Usage Data:</label> We gather
          information about how you interact with our website, including your IP
          address, browser type, pages visited, and time spent on our platform.
        </p>
        <h1 className="text-[20px] text-black font-bold mt-[40px]">
          How We Use Your Information
        </h1>
        <br />
        <p>
          <label className="font-bold">Service Improvement:</label> We use the
          collected data to enhance and personalize your experience on IPO
          Circle, optimizing our platform and services.
        </p>
        <br />
        <p>
          <label className="font-bold">Communication:</label>
          We may use your contact details to send important updates,
          newsletters, and marketing communications. You have the option to
          opt-out of these communications.
        </p>
        <br />
        <p>
          <label className="font-bold">Security:</label> Your information is
          crucial to our platform security. We employ industry-standard measures
          to protect your data from unauthorized access, disclosure, alteration,
          or destruction.
        </p>
        <br />
        <p>
          <label className="font-bold">Data Sharing:</label> We do not sell,
          trade, or otherwise transfer your personal information to external
          parties without your consent, except as required by law.
        </p>
        <br />
        <p>
          <label className="font-bold">Cookies:</label> IPO Circle uses cookies
          to enhance your browsing experience. These small files stored on your
          device help us analyze site traffic and improve our services. You can
          choose to disable cookies through your browser settings.
        </p>
        <br />
        <p>
          <label className="font-bold">Third-Party Links:</label> Our website
          may contain links to third-party websites. Please be aware that these
          sites have their own privacy policies, and we have no responsibility
          or liability for their content and activities.
        </p>
        <br />
        <p>
          <label className="font-bold">Children Privacy:</label> IPO Circle is
          not intended for individuals under the age of 18. We do not knowingly
          collect personal information from minors. If you believe that a minor
          has provided us with their data, please contact us, and we will
          promptly address the situation.
        </p>
        <br />
        <p>
          <label className="font-bold">Changes to Privacy Policy:</label> IIPO
          Circle reserves the right to update and modify this Privacy Policy.
          Any changes will be reflected on this page, and we encourage you to
          review our policy periodically.
        </p>
        <br />
        <p>
          <label className="font-bold">Contact Us:</label> If you have
          questions, concerns, or feedback regarding our Privacy Policy, please
          contact us at support@ipocircle.com. Thank you for trusting IPO Circle
          with your privacy.
        </p>
        <br />
      </div>
    </div>
  )
}
