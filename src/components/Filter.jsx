import React from 'react'

function Filter({data, setData}) {

    // ** Function to handle sorting
    const handleSorting = (e) => {
        let copyData = data;
        let sortedData = [];
        if (e.target.value === "1") {
            // sort name from A to Z
            copyData.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            sortedData = [...copyData];
        } else {
            // sort name from Z to A
            copyData.sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                } else if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            sortedData = [...copyData];
        }
        setData(sortedData);
    }

    // ** function to handle search 
    const handleSearch = (e) => {
        const originalData = JSON.parse(localStorage.getItem("govs"));
        const searchText = e.target.value;
        if (searchText) {
            setData(data.filter(gov => gov.name.includes(searchText)));
        } else {
            setData(originalData);
        }
    }


    return (
        <section className='filter'>
            <div>
                <label>Sort</label>
                <select onChange={handleSorting}>
                    <option value="" hidden>Select...</option>
                    <option value="1">Sort from A-Z</option>
                    <option value="2">Sort from Z-A</option>
                </select>
            </div>
            <div>
                <label>Search</label>
                <input type='text' onChange={handleSearch} />
            </div>
        </section>
    )
}

export default Filter;