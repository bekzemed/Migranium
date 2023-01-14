import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const PrivacyPolicy = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavBar show={show} onDone={() => setShow(!show)} />
      {!show && (
        <>
          <div className="bg-primary px-4 py-28 md:px-28">
            <span className="font-black text-5xl text-center block lg:leading-snug dark:text-black 2xl:w-[1350px] m-auto">
              Privacy Policy for Migranium
            </span>
          </div>
          <div className="flex flex-col px-4 py-14 md:px-28 lg:px-0 lg:w-[670px] m-auto">
            <span className="mb-10 opacity-80">
              At Migranium, we are committed to protecting the privacy of our
              users. This Privacy Policy explains how we collect, use, and share
              information about you when you use our website and software
              products, including Migranium.
            </span>

            <span className="mb-10 opacity-80">
              By using Migranium, you agree to the collection, use, and sharing
              of your information as described in this Privacy Policy. If you do
              not agree with our policies and practices, do not use Migranium.
            </span>
          </div>
          {/* Information */}
          <div className="flex flex-col px-4 py-14 md:px-28 lg:px-0 lg:w-[670px] m-auto">
            <span className="text-2xl font-bold mb-10">
              Information We Collect
            </span>
            <span className="mb-10 text-lg font-bold">
              We collect information about you in the following ways:
            </span>

            <div className="mb-16">
              <span className="flex items-center mb-2">
                <span className="text-6xl mr-1">&#183;</span>
                <span>Information you provide to us:</span>
              </span>

              <span className="mb-16 block">
                We may collect information about you when you create an account,
                update your profile, or use the features of Migranium. This may
                include your name, email address, phone number, and other
                personal or contact information.
              </span>

              <span className="flex items-center mb-2">
                <span className="text-6xl mr-1">&#183;</span>
                <span>Information we collect automatically:</span>
              </span>

              <span className="mb-16 block">
                When you use Migranium, we may collect certain information
                automatically, such as your IP address, browser type, operating
                system, and the pages you visit. We may also collect information
                about your device, such as the device's model and manufacturer.
              </span>

              <span className="flex items-center mb-2">
                <span className="text-6xl mr-1">&#183;</span>
                <span> Information from third parties:</span>
              </span>

              <span>
                We may receive information about you from third parties, such as
                social media platforms or other websites that you have linked to
                your Migranium account.
              </span>
            </div>

            {/* How we use */}
            <span className="text-2xl font-bold mb-10">
              How We Use Your Information
            </span>
            <span className="mb-10 text-lg font-bold">
              We use the information we collect about you to provide, maintain,
              and improve Migranium, and to develop new products and services.
              This may include:
            </span>
            <div className="mb-16">
              <span className="flex items-center mb-2">
                <span className="text-4xl 2xl:text-6xl mr-1">&#183;</span>
                <span>
                  Providing customer support and responding to your requests and
                  inquiries.
                </span>
              </span>

              <span className="flex items-center mb-2">
                <span className="text-4xl 2xl:text-6xl mr-1">&#183;</span>
                <span>
                  {" "}
                  Analyzing usage and trends to improve Migranium and
                  personalize your experience.
                </span>
              </span>

              <span className="flex items-center mb-2">
                <span className="text-4xl 2xl:text-6xl mr-1">&#183;</span>
                <span>
                  Communicating with you about Migranium, including updates and
                  promotions.
                </span>
              </span>

              <span className="flex items-center mb-2">
                <span className="text-4xl 2xl:text-6xl mr-1">&#183;</span>
                <span>
                  Enforcing our terms of service and preventing misuse of
                  Migranium.
                </span>
              </span>
            </div>

            {/* Sharing */}
            <span className="text-2xl font-bold mb-10">
              Sharing Your Information
            </span>
            <span className="mb-10 text-lg font-bold">
              We may share your information with third parties in the following
              situations:
            </span>

            <div className="mb-16">
              <span className="flex items-center mb-2">
                <span className="text-6xl mr-1">&#183;</span>
                <span>With service providers:</span>
              </span>

              <span className="mb-16 block">
                We may share your information with third-party service providers
                who perform services on our behalf, such as hosting, data
                analysis, payment processing, and customer support.
              </span>

              <span className="flex items-center mb-2">
                <span className="text-6xl mr-1">&#183;</span>
                <span>In response to legal requests:</span>
              </span>

              <span className="mb-16 block">
                We may disclose your information in response to a subpoena,
                court order, or other legal request.
              </span>

              <span className="flex items-center mb-2">
                <span className="text-6xl mr-1">&#183;</span>
                <span>
                  {" "}
                  To protect the rights, property, or safety of Migranium, our
                  users, or the public.
                </span>
              </span>

              <span className="flex items-center mb-2">
                <span className="text-6xl mr-1">&#183;</span>
                <span> With your consent:</span>
              </span>

              <span className="block mb-10">
                We may share your information with third parties when you have
                given us your consent to do so.
              </span>

              <span className="mb-10 text-lg font-bold">
                Users have the following options with respect to their
                information:
              </span>

              <div className="mb-16">
                <span className="flex items-center mb-2">
                  <span className="text-6xl mr-1">&#183;</span>
                  <span>Opting Out of Communications:</span>
                </span>

                <span className="mb-16 block">
                  Users can opt out of receiving marketing communications from
                  us by following the unsubscribe instructions included in such
                  communications or by contacting us directly.
                </span>

                <span className="flex items-center mb-2">
                  <span className="text-6xl mr-1">&#183;</span>
                  <span>Accessing and Updating Personal Information:</span>
                </span>

                <span className="mb-16 block">
                  Users can access and update their personal information by
                  logging into their account and updating their profile.
                </span>

                <span className="flex items-center mb-2">
                  <span className="text-6xl mr-1">&#183;</span>
                  <span> Deactivating or Deleting an Account:</span>
                </span>

                <span>
                  Users can deactivate their account by contacting us directly.
                  If a user requests that we delete their account, we will
                  delete their personal information from our systems, subject to
                  any legal obligations that require us to retain such
                  information.
                </span>
              </div>
            </div>

            {/* Retention */}
            <div className="mb-10">
              <span className="text-2xl font-bold mb-10 block">
                Data Retention
              </span>
              <span>
                We will retain your information for as long as your account is
                active or as needed to provide you with Migranium. If you choose
                to close your account, we will delete your information in
                accordance with our data retention policies.
              </span>
            </div>

            {/* Security */}
            <div className="mb-10">
              <span className="text-2xl font-bold mb-10 block">Security</span>
              <span>
                We take reasonable measures to protect your information from
                unauthorized access, use, or disclosure. However, no website or
                internet transmission is completely secure, and we cannot
                guarantee the security of your information.
              </span>
            </div>

            {/* Childrens Privacy */}
            <div className="mb-10">
              <span className="text-2xl font-bold mb-10 block">
                Children's Privacy
              </span>
              <span>
                Migranium is not intended for children under the age of 13. We
                do not knowingly collect personal information from children
                under 13. If we become aware that a child under 13 has provided
                us with personal information, we will delete such information in
                accordance with applicable law.
              </span>
            </div>

            {/* changes to this privacy policy */}
            <div className="mb-10">
              <span className="text-2xl font-bold mb-10 block">
                Changes to this Privacy Policy
              </span>
              <span>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the revised Privacy Policy
                on this page. You are advised to review this Privacy Policy
                periodically for any changes.
              </span>
            </div>

            {/* contact us */}
            <div className="mb-10">
              <span className="text-2xl font-bold mb-10 block">Contact Us</span>
              <span>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at [hello@migranium.com].
              </span>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default PrivacyPolicy;
