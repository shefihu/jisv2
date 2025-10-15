import "../styles/causeActions.css";
import MultiSelect from "../common/MultiSelect";
import { useEffect, useState } from "react";
import axios from "axios";

function CauseAction() {
  const [causeAction, setCauseActions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCauseActions = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        const options = response.data.map((data) => data.title);
        console.log(options);

        setCauseActions(options);
        setError(null);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
        console.error("Error fetching cause actions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCauseActions();
  }, []);

  return (
    <div className="cause_action_wrapper">
      <MultiSelect
        options={causeAction}
        selected={selected}
        setSelected={setSelected}
        label="Cause of Action"
        placeholder="Select one or more cause of action"
      />
    </div>
  );
}

export default CauseAction;
