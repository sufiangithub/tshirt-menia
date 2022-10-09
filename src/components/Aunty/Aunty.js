import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Cousin  name="Alim" house={house} />
                <Cousin name='Jalim' house={house} />
            </section>
        </div>
    );
};

export default Aunty;