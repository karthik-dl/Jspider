import { useState } from "react";
import Datalist from "./Datalist";
import EmpForm from "./EmpForm";

const SearchFrom = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addData = (newData) => {
        setData([...data, newData]);
    };

    const filteredData = data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (

        <div className="App">
            <h1>Data Storage and Search</h1>

            <EmpForm data={addData} />
            <input
                type="text"
                placeholder="Search data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Datalist data={filteredData} />


        </div>
    )
}

export default SearchFrom