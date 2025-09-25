import React from "react";

const VideoSambutan = () => (
  <section className="bg-gray-200 py-10" id="video-sambutan">
    <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0a4a8e] mb-6">
        Sambutan Direktur
      </h2>
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black max-w-3xl mx-auto">
        {/* Ganti src dengan link video sambutan yang diinginkan */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/FsWwV9mDyiI"
          title="Video Sambutan Direktur"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default VideoSambutan;