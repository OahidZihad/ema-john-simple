import React, { useEffect, useState } from "react";
import "./Test.css";

const Test = () => {
  return (
    <section className="course-information-component">
      <div className="container container-lg container-md container-sm">
        <h4 className="text-center my-5 section-title">
          এই কোর্সের বিশেষত্ব কি?
        </h4>
        <div className="card-container">
          <div className="info-card text-center card-1">
            <img
              src="https://phi.sgp1.cdn.digitaloceanspaces.com/website-prod-images/public/files/1646030428307.png"
              alt="img1"
            />
            <h3>১. প্রোগ্রামার হওয়ার কমপ্লিট একটা জার্নি !!</h3>
            <p>
              একজন ভালো জুনিয়র প্রোগ্রামার হওয়ার জন্য যা যা লাগবে তার সবই শেখানো
              হবে এই কোর্স এ। বেসিক প্রোগ্রামিং, ডাটা স্টার্কচার, এলগোরিদম, OOP,
              ডাটাবেজ, ক্লাউড কম্পিউটিং, ধরে ধরে শিখানো হবে। প্রজেক্ট করানো হবে।
              লাও ঠ্যালা।
            </p>
          </div>
          <div className="info-card text-center card-2">
            <img
              src="https://phi.sgp1.cdn.digitaloceanspaces.com/website-prod-images/public/files/1646030469180.png"
              alt="img1"
            />
            <h3>২. আনলিমিটেড সাপোর্ট !!!</h3>
            <p>
              যতক্ষণ পর্যন্ত বুঝতে পারবে না ততক্ষণ পর্যন্ত আমরা হেল্প করতেই
              থাকবো। ২৪ ঘন্টার মধ্যে সব প্রশ্নের উত্তর পাবে। ছুটির দিন বাদে
              প্রতিদিন ২/৩ বার গুগল হ্যাংআউট এ এসে স্কিনশেয়ার করে প্রবলেম সলভ
              করতে পারবে। আর কি লাগে🤗
            </p>
          </div>
          <div className="info-card text-center card-3">
            <img
              src="https://phi.sgp1.cdn.digitaloceanspaces.com/website-prod-images/public/files/1646030518623.png"
              alt="img1"
            />
            <h3>৩. ইফেক্টিভ লার্নিং প্রসেস</h3>
            <p>
              একদিন প্রোগ্রামিং করে উল্টায় ফেলো সাতদিন খবর না থাকা পাবলিকদের
              জন্য ডেইলি ডেইলি লার্নিং হ্যাবিট। ক্লাস, এসাইনমেন্ট, প্রজেক্ট
              ফিনিশ করার ডেডলাইন। এক্সট্রা প্রাকটিস প্রজেক্ট আইডিয়াসহ ইফেক্টিভ
              লার্নিং প্রসেস এবং এনভারনমেন্ট পাবে এই কোর্স।
            </p>
          </div>
          <div className="info-card text-center card-4">
            <img
              src="https://phi.sgp1.cdn.digitaloceanspaces.com/website-prod-images/public/files/1646030589072.png"
              alt="img1"
            />
            <h3>৪. সিভি/রেজুমি ফরওয়ার্ডিং</h3>
            <p>
              ডাটা স্ট্রাকচার আর এলগরিদম কোর্সে ভালো করলেই তোমার সিভি/রেজুমি,
              ইন্টারভিউ প্রিপারেশন এর জন্য হেল্প করা শুরু করবো আমরা। তোমার
              সিভি/রেজুমি পাঠিয়ে দিবো বিভিন্ন কোম্পানিতে। শিখবে এবং শেখা স্কিলকে
              ক্যারিয়ারে কনভার্ট করার সুযোগ পাবে।
            </p>
          </div>
          <div className="info-card text-center card-5">
            <img
              src="https://phi.sgp1.cdn.digitaloceanspaces.com/website-prod-images/public/files/1646030630969.png"
              alt="img1"
            />
            <h3>৫. অফলাইন ভিডিও দেখার সুযোগ</h3>
            <p>
              আমাদের স্পেশাল এন্ড্রয়েড এপ এ ভিডিও একবার ডাউনলোড করে সেই ভিডিও
              অফলাইনে বারবার দেখতে পারবে। বাড়তি কোন ইন্টারনেট বা এমবি লাগবে না।
              ল্যাপটপ/কম্পিউটারে কোর্স করার পাশাপাশি মোবাইলেও কোর্স করতে পারবে।
            </p>
          </div>
          <div className="info-card text-center card-6">
            <img
              src="https://phi.sgp1.cdn.digitaloceanspaces.com/website-prod-images/public/files/1646030661345.png"
              alt="img1"
            />
            <h3>৬. শেখা এবং ক্যারিয়ার গড়ার পার্টনার</h3>
            <p>
              নিজে নিজে শেখার প্যারা, ডিসিপ্লিন না থাকার কষ্ট। সঠিক গাইডলাইন এর
              অভাব মোচন করে তোমার প্রোগ্রামার হওয়ার এবং ক্যারিয়ার ডেভেলপ করার
              পার্টনার হতে চাই আমরা। একদম শুরু থেকে একজন পরিপূর্ন জুনিয়র
              প্রোগ্রামার হওয়ার আগ পর্যন্ত।
            </p>
          </div>
          <div className="info-card text-center card-7">
            <img
              src="https://phitron.io/static/media/smile.ac51da2d.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
