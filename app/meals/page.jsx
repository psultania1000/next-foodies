import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It's easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share"></Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
};

export default Meals;
