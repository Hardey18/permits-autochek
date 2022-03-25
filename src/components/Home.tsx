import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/ducks/permits";
import Modal from './Modal/Modal';

function Home() {
  const [allData, setAllData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [singlePermit, setSinglePermit] = useState(null);
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

  const showSinglePermit = (id: string) => {
    const currentPermitData: any = sortedPermits.find((permit: any) => permit.id === id);
    setSinglePermit(currentPermitData);
    setOpenModal(true);
  }
//   console.log("SORTED DATA", sortedPermits);
  return (<>
    <div>Home Component Here!!</div>
    {openModal && 
        <Modal
        singleEvent={singlePermit}
        setOpenModal={setOpenModal}
        />
      }
    {sortedPermits?.map((permit, index) => (
        <div key={index} onClick={() => showSinglePermit(permit.id)}>
            <p>{permit.issue_date}</p>
        </div>
    ))}
  </>
  )
}

export default Home;