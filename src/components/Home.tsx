import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/ducks/permits";

function Home() {
    const [allData, setAllData] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const permits = useSelector((state) => state.permit.permits);

  useEffect(() => {
      permits && setAllData(permits)
  }, [permits])

  const sortedPermits = allData?.sort((a: Date,b: Date) => {
    return new Date(b.issue_date) - new Date(a.issue_date);
  }).slice(0, 10);
  console.log("SORTED DATA", sortedPermits);
  return (<>
    <div>Home Component Here!!</div>
    {sortedPermits?.map((permit, index) => (
        <div key={index}>
            <p>{permit.issue_date}</p>
        </div>
    ))}
  </>
  )
}

export default Home;