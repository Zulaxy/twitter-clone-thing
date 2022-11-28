import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

import React from "react";

const Widgets = () => {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
      {/* search */}
      <div className="mt-2 flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none "
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 1000 }}
      />
    </div>
  );
};

export default Widgets;
