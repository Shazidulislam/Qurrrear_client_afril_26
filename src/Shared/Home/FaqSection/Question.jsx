import React from "react";

export default function Question() {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        
          <div className="space-y-4">
            <details className="max-w-4xl mx-auto  rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
               How does this posture corrector work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
               A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.
              </p>
            </details>
            <details className="max-w-4xl mx-auto  rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Is it suitable for all ages and body types?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Yes, absolutely! Our product/service is designed to be inclusive and suitable for all ages and body types. Whether you're young or older, petite or plus-size, we believe everyone deserves to feel comfortable and confident. Our offerings are crafted with diversity in mind, ensuring a great fit and experience for everyone regardless of their shape, size, or age.
              </p>
            </details>
            <details className="max-w-4xl mx-auto  rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Does it have smart features like vibration alerts?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
               Yes! Our product comes equipped with smart features including vibration alerts that gently remind you to correct your posture whenever you start to slouch. It connects seamlessly with our mobile app, allowing you to track your progress, set personalized goals, and monitor your posture habits throughout the day. The vibration intensity can be customized according to your preference, making it a truly smart and personalized experience.
              </p>
            </details>
            <details className="max-w-4xl mx-auto  rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              How will I be notified when the product is back in stock?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  Simply click the "Notify Me" button on the product page and enter your email address. As soon as the product is back in stock, you'll receive an instant email notification so you can place your order before it sells out again. You can also subscribe to our newsletter or follow us on social media to stay updated on restocks, new arrivals, and exclusive offers.
              </p>
            </details>
          
          </div>
        </div>
      </section>
    </div>
  );
}
