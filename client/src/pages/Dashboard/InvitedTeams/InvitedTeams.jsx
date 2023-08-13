import React from 'react';

const InvitedTeams = () => {
    return (
        <div className='grid grid-cols-3 justify-center items-center  h-full gap-10'>
            <button className="btn btn-outline btn-primary">All Invited Team</button>
            <button className="btn btn-outline btn-accent">Accepts Team</button>
            <button className="btn btn-outline btn-secondary">Delete Team</button>
        </div>
    );
};

export default InvitedTeams;