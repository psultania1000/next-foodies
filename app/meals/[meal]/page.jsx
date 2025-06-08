import React from "react";
import classes from "./page.module.css";
import { headers } from "next/headers";
import Image from "next/image";
const MealDetailsPage = async ({ params }) => {
  //   console.log(await params);
  const item = (await params).meal;
  console.log(item);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>TITLE</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>

      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: "...",
          }}></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
