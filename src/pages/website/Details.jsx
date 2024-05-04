// ** Import hooks
import { useState, useEffect } from "react";

// ** Import Govs Apis services
import GovsApis from "../../apis/govs.apis";

// ** Import page components
import GridDetails from "../../components/GridDetails";
import Loader from "../../components/Loader";

// ** React router imports
import { useParams } from 'react-router-dom';

function Details() {
  // ** hooks
  const { govId } = useParams();

  // ** states
  const [specificGov,  setSpecificGov] = useState(null);
  const [loading, setLoading] = useState(false);

  // ** Function to get gov by id
  const getGovById = async (id) => {
    setLoading(true);
    const response = await GovsApis.getGovById(id);
    if (response) {
      setSpecificGov(response.data.data)
    }
    setLoading(false);
  }

  // ** use effect to get gov by id after rendering and updating govId 
  useEffect(() => {
    getGovById(govId);
}, [govId]);


  return (
    loading ? <Loader showLoader={Loader} /> : <GridDetails specificObject={specificGov} />
  )
}

export default Details;