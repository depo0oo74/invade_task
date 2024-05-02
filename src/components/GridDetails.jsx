import React from 'react'

function GridDetails({specificObject}) {
    return (
        <section className='gridDetails'>
            <div className='row'>
                <div>
                    <b>Name</b>
                </div>
                <div>
                    <p>{specificObject?.name}</p>
                </div>
            </div>
            <div className='row'>
                <div>
                    <b>Region</b>
                </div>
                <div>
                    <p>{specificObject?.region}</p>
                </div>
            </div>
            <div className='row'>
                <div>
                    <b>No of cities</b>
                </div>
                <div>
                    <p>{specificObject?.noOfCities}</p>
                </div>
            </div>
        </section>
    );
}

export default GridDetails;