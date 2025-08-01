import React from "react";
import ButtonOne from "../components/buttons/ButtonOne";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="@container max-h-screen">
      <div className="@[480px]:p-4">
        <div
          className="flex h-screen lg:h-[85vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlsMjGFeSeTjN2EM16I1MSMvYWkNPgLFruEptzNR1c8RHFO6WXmYdLKbFMRCMaaVqDPsaMrK7okUqsa1fA8POk2bLfLMK4qIp-52Leq-52ZEFjv0SDGEbKk50-MpfV6Ap1E8XPhQBPrLvhYBOgfEWxZ9WRJgj0QRLWkFjcqtJF-mY4Mdn3BBXmzfq3GlIH8n3WvmzcwmJBjDeFUtzj3EBaz38KUviN1_6whbjHrDFvXlJs4bQKgt_0kPa-2OM4TNfacoaVjpey-hII')",
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Discover stories, thinking, and expertise from writers on any
              topic
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Stay curious.
            </h2>
          </div>
          <Link to={"/login"}>
            <ButtonOne text={"Start reading"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
