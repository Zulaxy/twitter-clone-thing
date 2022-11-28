import type { GetServerSideProps, NextPage } from "next";
import { fetchTweets } from "../utils/fetchTweets";
import { Tweet } from "../typings";
import Head from "next/head";
import Image from "next/image";

import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Widgets from "../components/widgets/Widgets";
import { Toaster } from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  console.log(tweets);

  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      {/* The head from next.js hopes us to inject code into the head of the document */}
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed tweets={tweets} />
        <Widgets />
        {/* sidebar
        feed
        widgets */}
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  };
};
