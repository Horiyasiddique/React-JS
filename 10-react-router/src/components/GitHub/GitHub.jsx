import React from "react";
import { useEffect, useState } from "react";

function GitHub() {
  // const data = useLoaderData()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Horiyasiddique")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="bg-gray-200  p-4  my-2 text-black font-normal">
      <img src={data.avatar_url} alt="Github avatar" className="w-24 h-24" />
      <h1 className="text-3xl font-semibold">{data.name}</h1>
      <h5>{data.bio}</h5>
      <h6>followings: {data.following}</h6>
      <h6>followers: {data.followers}</h6>
    </div>
  );
}

export default GitHub;

