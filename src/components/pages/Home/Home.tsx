import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPermits } from "../../../redux/ducks/permits";
import Card from '../../reusables/Card/Card';
import Modal from '../../reusables/Modal/Modal';
import './home.css'

interface PermitDetail {
  id: string,
  contact_1_name: string
}

function Home() {
  const [allData, setAllData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [singlePermit, setSinglePermit] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPermits());
  }, [dispatch]);

  const permits = useSelector((state: any) => state.permit.permits);

  useEffect(() => {
      permits && setAllData(permits)
  }, [permits])

  const sortedPermits = allData?.sort((a: any, b: any) => {
    return new Date(b.issue_date).getTime() - new Date(a.issue_date).getTime();
  }).slice(0, 10);
  console.log("RESULTS", sortedPermits)

  const showSinglePermit = (id: string) => {
    const currentPermitData: any = sortedPermits.find((permit: any) => permit.id === id);
    setSinglePermit(currentPermitData);
    setOpenModal(true);
  }
  return (<>
    <div className="modal-header">List of Recent Permits</div>

    {openModal && 
        <Modal
            singlePermit={singlePermit}
            setOpenModal={setOpenModal}
        />
      }
    {sortedPermits?.map((permit: PermitDetail) => (
        <div className="hotlist" key={permit.id} onClick={() => showSinglePermit(permit.id)}>
            <Card
                id={permit.id}
                name={permit.contact_1_name}
            />
        </div>
    ))}
  </>
  )
}

export default Home;