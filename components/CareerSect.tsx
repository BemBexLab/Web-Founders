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
    const email = "hr@bembex.com"; // Replace with your actual email
    const subject = `Application for ${jobTitle}`;
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  if (loading) return <p className="text-white text-center">Loading jobs...</p>;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-7xl px-4 sm:px-8 mx-auto">
      <hr className="w-full mt-2 border-t-2 border-white" />

      <div className="w-full text-center mt-10">
        <p className="text-[#DE2F04] font-semibold text-lg">
          Jobs Opportunities
        </p>
        <h1 className="text-white font-bold text-3xl sm:text-4xl mt-2">
          Job Openings
        </h1>
      </div>

      <div className="mt-8"></div>

      {jobListings.map((job) => (
        <div
          key={job.id}
          className="flex flex-col sm:flex-row items-stretch gap-4 w-full"
        >
          <div
            className="flex flex-col sm:flex-row 
              flex-grow rounded-[115px] border border-[#DE2F04]
              bg-[rgba(222,47,4,0.10)]
              shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset]
              backdrop-blur-[9.1379px]
              items-center justify-between
              overflow-hidden px-4 sm:px-6 py-4 text-center"
          >
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
              <p className="text-gray-200 font-medium text-lg sm:text-xl">
                {job.title}
              </p>
            </div>

            <div className="w-full sm:w-1/4 sm:border-l border-[rgba(222,47,4,0.3)] sm:px-4">
              <p className="text-gray-200 text-lg sm:text-xl">{job.location}</p>
            </div>

            <div className="w-full sm:w-1/4 sm:border-l border-[rgba(222,47,4,0.3)] sm:px-4">
              <p className="text-gray-200 text-lg sm:text-xl">{job.type}</p>
            </div>
          </div>

          <a
            href={getMailToLink(job.title)}
            className="rounded-[115px] border border-[#DE2F04]
              bg-[rgba(222,47,4,0.10)]
              shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset]
              backdrop-blur-[9.1379px]
              text-[#FFFFFF] px-8 py-4 hover:bg-[rgba(222,47,4,0.20)]
              transition-colors font-medium text-base sm:text-lg
              flex items-center justify-center w-full sm:w-auto"
          >
            <span className="flex items-center gap-2">
              Apply Now
              <img src="/basil_bag-solid.png" alt="Icon" className="w-5 h-5" />
            </span>
          </a>
        </div>
      ))}

      <div className="mt-8"></div>
    </div>
  );
};

export default JobListingBar;
