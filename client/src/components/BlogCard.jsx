import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard() {
  const navigate = useNavigate();

  return (
    <div className="p-4 @container" onClick={() => navigate("/12")}>
      <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMQO0kACg4Pc__M1lVURtCTCaLboe4j1WcqkkBT1Mq_2a-GH_Z3jUk9V3wmnv5DrVqFLOfw_eSYGZ3TE5addvM0JsEbJytTBilXLdGXek7Wff5XVIevEfoXmRQYeihctdb2M6oZw7qbo5ZIF0G7TC13aq7mV3vHhrEcRekKf1VBpvNdqOeHzq0QSlkV5Z986vqKloRFK2nTGT1KiUjYhqu0pvSDk10iLS0lC3DgfPBMb3ek0ghDsLjVEzbTmT6Z427OTaMJTp_hP7h")',
          }}
        />
        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
          <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
            The Rise of Artificial Intelligence: Opportunities and Challenges
          </p>
          <div className="flex items-end gap-3 justify-between">
            <p className="text-neutral-500 text-base font-normal leading-normal">
              Examine the rapid advancements in AI, exploring its potential
              applications and the ethical considerations it presents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
