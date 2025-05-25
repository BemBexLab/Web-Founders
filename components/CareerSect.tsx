"use client";

import React, { useEffect, useState } from "react";

type Job = {
  id: number;
  title: string;
  location: string;
  type: string;
};

const JobListingBar = () => {
  const [jobListings, setJobListings] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) throw new Error("Failed to fetch");

        const data: any[] = await response.json();

        const jobs: Job[] = data
          .filter((post) => post.acf?.job_title)
          .map((post) => ({
            id: post.id,
            title: post.acf.job_title,
            location: post.acf.location,
            type: post.acf.job_type,
          }));

        setJobListings(jobs);
      } catch (err) {
        console.error("Failed to load jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const getMailToLink = (jobTitle: string) => {
    const email = "hr@bembex.com";
    const subject = `Application for ${jobTitle}`;
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-7xl px-4 sm:px-8 mx-auto">
      <hr className="w-full mt-2 border-t-2 border-white" />

      <div className="w-full text-center mt-10">
        <p className="text-[#BF0B30] font-semibold text-lg">Jobs Opportunities</p>
        <h1 className="text-[#002768] font-bold text-3xl sm:text-4xl mt-2">
          Job Openings
        </h1>
      </div>

      <div className="mt-8" />

      {/* Job Listings or Loading */}
      {loading ? (
        <p className="text-white text-center">Loading jobs...</p>
      ) : jobListings.length === 0 ? (
        <p className="text-white text-center">No job openings found.</p>
      ) : (
        jobListings.map((job, index) => {
          const isRed = index % 2 === 0;
          const bgColor = isRed ? "#BF0B30" : "#002768";
          const borderColor = bgColor;

          return (
            <div
              key={job.id}
              className="flex flex-col sm:flex-row items-stretch gap-4 w-full"
            >
              <div
                className="flex flex-col sm:flex-row flex-grow rounded-[115px] items-center justify-between overflow-hidden px-4 sm:px-6 py-4 text-center transition-all duration-300"
                style={{
                  background: bgColor,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                  <p className="text-white font-medium text-lg sm:text-xl">
                    {job.title}
                  </p>
                </div>

                <div className="w-full sm:w-1/4 sm:border-l border-white/30 sm:px-4">
                  <p className="text-white text-lg sm:text-xl">
                    {job.location}
                  </p>
                </div>

                <div className="w-full sm:w-1/4 sm:border-l border-white/30 sm:px-4">
                  <p className="text-white text-lg sm:text-xl">{job.type}</p>
                </div>
              </div>

              <a
                href={getMailToLink(job.title)}
                className="rounded-[115px] text-white px-8 py-4 transition-colors font-medium text-base sm:text-lg flex items-center justify-center w-full sm:w-auto"
                style={{
                  background: bgColor,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <span className="flex items-center gap-2">
                  Apply Now
                  <img src="/basil_bag-solid.png" alt="Icon" className="w-5 h-5" />
                </span>
              </a>
            </div>
          );
        })
      )}

      <div className="mt-8" />
    </div>
  );
};

export default JobListingBar;
