import React from "react";
import Link from "next/link";
const Meals = () => {
  return (
    <div>
      <h1>All meals!</h1>
      <Link href={"./meals/pizza"}>Pizza</Link>
      <Link href={"./meals/burger"}>Burger</Link>
      <Link href={"./meals/pasta"}>Pasta</Link>
    </div>
  );
};

export default Meals;
