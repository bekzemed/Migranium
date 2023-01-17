import React, { useState } from "react";
import Term from "../components/Term";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Terms = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavBar show={show} onDone={() => setShow(!show)} />
      {!show && (
        <>
          <div className="bg-primary px-4 py-28 md:px-28">
            <span className="font-black text-5xl text-center block lg:leading-snug dark:text-black 2xl:w-[1350px] m-auto">
              Terms Of Use
            </span>
          </div>
          <div className="flex flex-col px-4 py-5 md:px-28 lg:px-0 lg:w-[670px] m-auto">
            <span className="opacity-80">
              Welcome to Migranium! By accessing or using our software product,
              you agree to be bound by the following terms and conditions
              (“Terms of Use”). Please read these Terms of Use carefully before
              using our product. If you do not agree to these Terms of Use, you
              may not access or use our product.
            </span>
          </div>

          <div className="flex flex-col px-4 py-5 md:px-28 lg:px-0 lg:w-[670px] m-auto">
            <Term
              text="License to Use: Subject to these Terms of Use, Company grants
                  User a limited, non-exclusive, non-transferable license to
                  access and use the Software for personal or business purposes.
                  User may not sublicense, assign, or transfer this license
                  without the prior written consent of Company."
            />

            <Term
              text="Prohibited Uses: User agrees to use the Software only for
                  lawful purposes and in accordance with these Terms of Use.
                  User may not use the Software to:"
            />
            <Term
              text="Infringe upon the intellectual property rights of any person
                  or entity"
            />
            <Term text="Transmit any viruses, worms, or other malicious code" />
            <Term
              text="Interfere with the normal operation of the Software or server
                  on which it is hosted"
            />
            <Term
              text="Modification of Software: Company reserves the right to
                  modify, update, or discontinue the Software at any time
                  without notice to User."
            />
            <Term
              text="Termination of Access: Company reserves the right to terminate
                  or restrict User's access to the Software at any time and for
                  any reason, including but not limited to violation of these
                  Terms of Use."
            />
            <Term
              text={`Disclaimer of Warranties: The Software is provided "as is" and
                  "as available" without warranty of any kind, either express or
                  implied. Company does not warrant that the Software will meet
                  User's requirements or that it will be uninterrupted or
                  error-free.`}
            />
            <Term
              text={`Disclaimer of Warranties: The Software is provided "as is" and
              "as available" without warranty of any kind, either express or
              implied. Company does not warrant that the Software will meet
              User's requirements or that it will be uninterrupted or
              error-free.`}
            />
            <Term
              text="Limitation of Liability: In no event shall Company be liable
              for any damages whatsoever, including but not limited to
              direct, indirect, incidental, consequential, or punitive
              damages, arising out of or in connection with User's use of or
              inability to use the Software."
            />
            <Term
              text="Governing Law: These Terms of Use shall be governed by and
              construed in accordance with the laws of the State of [State]
              and the federal laws of the United States."
            />
            <Term
              text="Entire Agreement: These Terms of Use constitute the entire
              agreement between User and Company and supersede all prior or
              contemporaneous communications and proposals, whether oral or
              written. If any provision of these Terms of Use is found to be
              invalid or unenforceable, that provision shall be enforced to
              the maximum extent possible, and the remaining provisions
              shall remain in full force and effect."
            />
            <Term
              text="Acceptance of Terms of Use. These Terms of Use apply to all
              visitors, users, and others who access or use the Migranium
              software product. By accessing or using the Migranium product,
              you agree to be bound by these Terms of Use. If you disagree
              with any part of the terms, then you may not access or use the
              Migranium product."
            />
            <Term
              text="Use of the Migranium Product. The Migranium product is
              intended for individuals and businesses to schedule
              appointments and manage customer queues. You may use the
              Migranium product for personal or commercial use, as long as
              you do not engage in any unauthorized or unlawful activities,
              including but not limited to hacking, spamming, or infringing
              on the intellectual property rights of others."
            />
            <Term
              text="Account Registration. In order to access certain features of
              the Migranium product, you may be required to create an
              account. When creating an account, you must provide accurate
              and complete information. You are responsible for maintaining
              the confidentiality of your account login information and for
              all activities that occur under your account."
            />
            <Term
              text="Changes to These Terms of Use: Company reserves the right to
              modify these Terms of Use at any time. Any modifications will
              be effective upon posting of the revised Terms of Use on the
              Software. User's continued use of the Software after the
              posting of any modifications will constitute acceptance of
              those modifications."
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Terms;
