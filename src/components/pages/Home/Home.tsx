import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPermits } from "../../../redux/ducks/permits";
import Card from '../../Card/Card';
import Modal from '../../Modal/Modal';
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

  const permits = useSelector((state) => state.permit.permits);

  useEffect(() => {
      permits && setAllData(permits)
  }, [permits])

  const sortedPermits = allData?.sort((a: Date, b: Date): any => {
    return new Date(b.issue_date) - new Date(a.issue_date);
  }).slice(0, 10);

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
                contact_1_name={permit.contact_1_name}
            />
        </div>
    ))}
  </>
  )
}

export default Home;