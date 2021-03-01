import React from 'react'
import { PersonList, PersonDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';
import Row from '../row-wrraper';

const PersonPage = ({match, history}) => {
    const { id } = match.params;
    return (
        <Row left={<PersonList onItemSelected={(id) => history.push(id)} />} 
            right={<PersonDetails selectedItem={id} />}
        />
        
    )
}

export default withRouter(PersonPage);
