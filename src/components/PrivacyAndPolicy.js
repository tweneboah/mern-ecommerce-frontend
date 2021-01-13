import React from 'react';

const PrivacyAndPolicy = () => {
  return (
    <div>
      <div className='text-center h-min-screen m-4'>
        <p className='text-lg font-bold mb-3 mt-6'>Privacy Policy</p>
        <p className='mb-4'>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from our
          store.
        </p>

        <p className='text-lg font-bold'>Personal Information We Collect</p>
        <p className='mb-4'>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information.”
        </p>

        <p className='text-lg font-bold mb-3'>
          We collect Device Information using the following technologies:
        </p>
        <p className='mb-4'>
          - “Cookies” are data files that are placed on your device or computer
          and often include an anonymous unique identifier. For more information
          about cookies, and how to disable cookies, visit
          <span>
            {' '}
            <a
              className='text-blue-600 font-semibold'
              href='http://www.allaboutcookies.org<'>
              http://www.allaboutcookies.org
            </a>{' '}
          </span>
          . - “Log files” track actions occurring on the Site, and collect data
          including your IP address, browser type, Internet service provider,
          referring/exit pages, and date/time stamps. - “Web beacons,” “tags,”
          and “pixels” are electronic files used to record information about how
          you browse the Site. Additionally, when you make a purchase or attempt
          to make a purchase through the Site, we collect certain information
          from you, including your name, billing address, shipping address,
          payment information, email address, and phone number. We refer to this
          information as “Order Information.” When we talk about “Personal
          Information” in this Privacy Policy, we are talking both about Device
          Information and Order Information.
        </p>

        <p className='text-lg font-bold mb-3'>
          Sharing Your Personal Information
        </p>
        <p className='mb-4'>
          We use Google Analytics to help us understand how our customers use
          the Site--you can read more about how Google uses your Personal
          Information here:{' '}
          <span>
            <a
              className='text-blue-600 font-semibold'
              href='https://www.google.com/intl/en/policies/privacy/'>
              https://www.google.com/intl/en/policies/privacy/
            </a>
          </span>
          . You can also opt-out of Google Analytics here:
          <span>
            <a
              className='text-blue-600 font-semibold'
              href='https://tools.google.com/dlpage/gaoptout.'>
              https://tools.google.com/dlpage/gaoptout.
            </a>
          </span>{' '}
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
        </p>

        <p className='text-lg font-bold mb-3'>Behavioural Advertising</p>
        <p className='mb-4'>
          As described above, we use your Personal Information to provide you
          with targeted advertisements or marketing communications we believe
          may be of interest to you. For more information about how targeted
          advertising works, you can visit the Network Advertising Initiative’s
          (“NAI”) educational page at
          <span>
            <a
              className='text-lg font-bold'
              href=' http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work'>
              {' '}
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
            </a>
          </span>
          . You can opt out of targeted advertising anytime.
        </p>

        <p className='text-lg font-bold mb-3'>Your Rights</p>
        <p className='mb-4'>
          You have the right to access personal information we hold about you
          and to ask that your personal information be corrected, updated, or
          deleted. If you would like to exercise this right, please contact us
          through the contact information below.
        </p>

        <p className='text-lg font-bold mb-3'>Data Retention</p>
        <p>
          When you place an order through the Site, we will maintain your Order
          Information for our records unless and until you ask us to delete this
          information.
        </p>

        <p className='text-lg font-bold mb-3'>Changes</p>
        <p className='mb-4'>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>

        <p className='text-lg font-bold mb-3'>Minors</p>
        <p className='mb-4'>
          The Site is not intended for individuals under the age of 18.
        </p>

        <p className='text-lg font-bold mb-3'>Contact Us</p>
        <p className='mb-4'>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at blisspathconsult@outlook.com or by mail using the details
          provided below: Box 820, Adum, Kumasi .
        </p>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
