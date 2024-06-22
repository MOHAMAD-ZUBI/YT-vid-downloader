"use client";
import React from "react";
import axios from "axios";

const Hero = () => {
  const [videoLink, setVideoLink] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleDownload = async () => {
    if (!videoLink) {
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.resumeiry.tech/yt-download?url=${videoLink}`
      );
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto max-w-[1530px] h-[50px] px-4 mt-[173px]">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className=" md:text-[56px] text-4xl max-md:text-center font-semibold ">
          Youtube Video Downloader
        </h1>
        <p className="mt-[24px] font-semibold text-center max-w-[686px]">
          Try this unique tool for quick, hassle-free downloads from
          YouTube.Transform your offline video collection with this reliable and
          efficient downloader.
        </p>
        <div className=" max-w-[980px] w-full bg-gray-200 p-2 mt-[60px] rounded-2xl">
          <div className="flex flex-row">
            <input
              type="text"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              className="w-full h-[50px] px-4 rounded-l-2xl outline-none"
              placeholder="Paste your video link here"
            />
            <button
              disabled={!videoLink}
              onClick={() => {
                handleDownload();
              }}
              className="h-[50px] w-[120px] disabled:bg-gray-400 disabled:text-gray-500 ease-in duration-200 bg-blue-500 text-white rounded-r-2xl"
            >
              Download
            </button>
          </div>
        </div>
        <div className="w-full bg-black flex rounded-xl justify-center mt-[64px] md:min-h-[90px] items-center">
          <p className="text-white font-semibold p-4">
            Downloading videos from YouTube is against their terms of service.
            Proceed with caution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
