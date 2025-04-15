import React from "react";

const MealsPage = async ({ params }) => {
  //   console.log(await params);
  const item = (await params).meal;
  console.log(item);
  return (
    <div>
      <h1>Here will be details for your {item}</h1>
    </div>
  );
};

export default MealsPage;
