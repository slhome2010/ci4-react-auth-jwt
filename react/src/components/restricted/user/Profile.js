import React from 'react';
import { loadUser } from '../../../utility/LocalStorage';
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { formatDate } from '../../../utility/Formatter';

const UserProfile = () => {
    const user = loadUser();
    return (
        <div>
            <Card>
                {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                <CardBody>
                    <CardTitle>{user.name}</CardTitle>
                    <CardSubtitle>{user.email}</CardSubtitle>
                    <CardText>Account created on {formatDate(user.created_at)}.</CardText>
                    {/* //<Button>Button</Button> */}
                </CardBody>
            </Card>
        </div>
    )
}

export default UserProfile;