// src/components/InsightsSection.jsx
import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { insightData } from '../data';
import { Link } from 'react-router-dom';

const InsightsSection = () => {
  return (
    <section className="min-h-screen bg-white/90 rounded-t-3xl text-black py-20 lg:px-20 px-6 sm:px-10">
      <div className="flex flex-col w-full">
        {/* Section Header */}
        <div className="pb-8">
          <div className="flex text-secondary items-center flex-row gap-4 text-[12px] lg:text-sm font-semibold">
            <FaDotCircle />
            <span className="uppercase text-gray-800">Featured News</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Latest Insights for Your Business</h2>
          <p className="mt-2 text-gray-600">
            Stay informed with our expert articles, industry trends, and practical guides to help you navigate the digital landscape.
          </p>
        </div>

        {/* Insights List */}
        <div className="flex flex-col gap-4">
          {insightData.map((data, i) => (
            <div key={i} className="flex flex-col">
              <span className="bg-gray-800 h-[1px] w-full"></span>
              <div className="grid lg:gap-20 sm:gap-10 gap-2 py-8 grid-cols-1 sm:grid-cols-5">
                {/* Image Section */}
                <Link to={data.link} className="sm:col-span-2">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="h-[200px] rounded-xl w-full lg:w-4/5 object-cover"
                  />
                </Link>

                {/* Content Section */}
                <div className="sm:col-span-3 py-2 relative">
                  {data.category && (
                    <div className="flex text-yellow-600 items-center flex-row md:py-3 gap-4 lg:text-sm text-[12px] font-semibold">
                      <FaDotCircle />
                      <span className="uppercase text-secondary-dark">
                        {data.category}
                      </span>
                    </div>
                  )}
                  <Link
                    to={data.link}
                    className="md:pt-4 py-2 hover:underline text-base lg:text-lg font-semibold tracking-wider font-sans"
                  >
                    {data.title}
                  </Link>

                  {/* Author Info */}
                  <div className="flex md:pt-10 mt-auto flex-row items-center">
                    <img
                      src={data.author.avatar}
                      alt={data.author.name}
                      className="w-12 h-12 mr-4 rounded-full"
                    />
                    <p className="rounded-xl bg-white text-center px-4 my-auto py-1 ml-2 text-gray-800 text-sm">
                      {data.author.name}
                    </p>
                    <p className="rounded-xl bg-white text-center px-4 my-auto py-1 ml-2 text-gray-800 text-sm">
                      {data.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
