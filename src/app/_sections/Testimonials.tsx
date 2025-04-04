"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider } from '@/components/Sliders/Slider';
import { StarRating } from '@/components/StarRating';
import React from 'react'

export default function Testimonials() {
  return (
    <Slider data={testimonials}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderItem={(item: any) => <StyledCard data={item} />}
   />
  )
}

function StyledCard({ data }: any) {
  return (
    <div className="space-y-3 rounded-lg border bg-white p-3 text-zinc-500">
      <StarRating rating={data.rating} className="text-yellow-500" />
      <p>{data.review}</p>
      <div>
        <p>{data.userName}</p>
        <p>{data.designation}</p>
      </div>
    </div>
  );
}

  const testimonials = [
    {
      id: 1,
      userName: "Pankaj Kumar",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, autem et tempora hic obcaecati ad ab unde magnam ipsa nihil eos possimus officiis non doloremque iure aliquid nemo libero aspernatur pariatur eligendi veniam deserunt amet.",
      rating: 5,
      designation: "Full Stack Web Developer",
    },
    {
      id: 2,
      userName: "Ashik",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, autem et tempora hic obcaecati ad ab unde magnam ipsa nihil eos possimus officiis non doloremque iure aliquid nemo libero aspernatur pariatur eligendi veniam deserunt amet.",
      rating: 5,
      designation: "Front Web Developer",
    },
  ];