// ** Import hooks
import { useState, useEffect } from "react";

// ** Import sweet alert
import sweetAlert from "../../helpers/sweetAlert";

// ** React router imports
import { Link } from "react-router-dom"

// ** Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

// ** Import Govs Apis services
import GovsApis from "../../apis/govs.apis";

// ** Import page components
import Table from "../../components/Table";
import Filter from "../../components/Filter";
import Popup from "../../components/Popup";

function Home() {
  // ** states
  const [govsList, setGovsList] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [govId, setGovId] = useState("");

  // ** Function to get all govs
  const getAllGovs = async (refresh) => {
    const cacheData = localStorage.getItem("govs");
    if (cacheData && !refresh) {
      setGovsList(JSON.parse(cacheData));
    } else {
      const response = await GovsApis.getAllGovs();
      if (response) {
        sweetAlert.success(`you have got ${response.data.result} results !!`);
        localStorage.setItem("govs", JSON.stringify(response.data.data));
        setGovsList(response.data.data);
      }
    }
  }

  // ** use effect to get all Govs after rendering
  useEffect(() => {
    getAllGovs(false);
  }, []);

  // ** function to handle toggle delete model
  const deleteToggleModal = (id) => {
    setDeleteModal(!deleteModal);
    setGovId(id);
  }

  // ** Function to handle delete gov
  const deleteGov = async (govId) => {
    deleteToggleModal("");
    GovsApis.deleteSpecificGov(govId).then(response => {
      if (response.data.status === "success") {
        sweetAlert.success("Governemnt deleted successfully!");
      } else {
        sweetAlert.error(`${response.data.message}`);  
      }
      getAllGovs(true);
    }).catch(() => {
      sweetAlert.error("An Error occured!");
    });
}

  // ** Columns of govs table 
  const govsCoulmns = [
      {
          name: "Name",
          value: "name"
      },
      {
          name: "Action",
          value: "_id",
          returnValue: function(id) {
              return (
                  <>
                      <Link className="action show" to={`/details/${id}`}>
                          <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <button className="action delete" onClick={() => deleteToggleModal(id)}>
                          <FontAwesomeIcon icon={faTrash} />
                      </button>
                  </>
              )
          }
      }
  ]


  return (
    <>
      <Filter data={govsList} setData={setGovsList} />
      <Table columns={govsCoulmns} data={govsList} />
      <Popup 
        title="Delete government" 
        description="Do you want to delete this government ?" 
        modal={deleteModal} 
        toggle={deleteToggleModal} 
        handleDelete={() => deleteGov(govId)}
      />
    </>
  )
}

export default Home