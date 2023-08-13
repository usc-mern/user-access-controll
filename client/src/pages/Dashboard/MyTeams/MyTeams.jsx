import React from 'react';

const MyTeams = () => {
    return (
        <div className='grid grid-cols-4 justify-center items-center  h-full gap-10'>
            <button className="btn btn-outline btn-accent">All Team Show</button>
            <button className="btn btn-outline btn-primary">Add Team</button>
            <button className="btn btn-outline btn-accent">Update Team</button>
            <button className="btn btn-outline btn-secondary">Delete Team</button>
        </div>
    );
};

export default MyTeams;